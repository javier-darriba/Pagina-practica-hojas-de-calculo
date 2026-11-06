/* engine.js — hoja de cálculo: lectura de fórmulas y funciones disponibles.
   Para añadir una función nueva, agrégala en el objeto F (y su alias en español en AL). */
const $=id=>document.getElementById(id),COLS='ABCDEF'.split(''),ROWS=11,PEND={};
let raw={},cache={};
const nums=a=>a.flat(9).filter(v=>typeof v==='number');
const sum=a=>a.reduce((x,y)=>x+y,0);
const mt=(v,c)=>{if(typeof c==='string'){const m=c.match(/^(<=|>=|<>|<|>|=)(.*)$/);if(m){const n=m[2].trim().replace(',','.'),b=n!==''&&!isNaN(n)?Number(n):m[2].toLowerCase(),a=typeof v==='string'?v.toLowerCase():v;return {'<':a<b,'>':a>b,'<=':a<=b,'>=':a>=b,'=':a==b,'<>':a!=b}[m[1]]}return String(v).toLowerCase()===c.toLowerCase()}return v===c};
const F={SUM:(...a)=>sum(nums(a)),
AVERAGE:(...a)=>{const n=nums(a);if(!n.length)throw new Error('#DIV/0!');return sum(n)/n.length},
MAX:(...a)=>Math.max(...nums(a)),MIN:(...a)=>Math.min(...nums(a)),COUNT:(...a)=>nums(a).length,
IF:(c,a,b)=>c?a:(b===undefined?false:b),
ROUND:(x,n=0)=>{const m=10**n;return Math.round(x*m)/m},
COUNTIF:(r,c)=>r.filter(v=>mt(v,c)).length,
SUMIF:(r,c,s)=>{s=s||r;return sum(r.map((v,i)=>mt(v,c)&&typeof s[i]==='number'?s[i]:0))},
AND:(...a)=>a.flat(9).every(Boolean),OR:(...a)=>a.flat(9).some(Boolean)};
const AL={SUMA:'SUM',PROMEDIO:'AVERAGE',CONTAR:'COUNT',SI:'IF',REDONDEAR:'ROUND','CONTAR.SI':'COUNTIF','SUMAR.SI':'SUMIF',Y:'AND',O:'OR'};
for(const k in AL)F[k]=F[AL[k]];
const pr=r=>{const m=r.match(/^([A-Z]+)(\d+)$/);return[m[1].charCodeAt(0)-65,+m[2]]};
function R(a,b){const[c1,r1]=pr(a),[c2,r2]=pr(b),o=[];for(let r=Math.min(r1,r2);r<=Math.max(r1,r2);r++)for(let c=Math.min(c1,c2);c<=Math.max(c1,c2);c++)o.push(val(String.fromCharCode(65+c)+r));return o}
const C=ref=>{const v=val(ref);return v===''?0:v};
function run(f){
 const re=/"[^"]*"|\$?[A-Z]{1,2}\$?\d+:\$?[A-Z]{1,2}\$?\d+|[A-Z][A-Z.]*(?=\()|\$?[A-Z]{1,2}\$?\d+|\d+\.?\d*%?|<>|<=|>=|[-+*\/^&=<>(),;]|\s+/gi;
 const t=f.match(re)||[];if(!t.length||t.join('')!==f)throw new Error('#NOMBRE?');
 let js='';
 for(const k of t){const K=k.toUpperCase();
  if(k[0]==='"')js+=k;
  else if(/^\$?[A-Z]{1,2}\$?\d+:/.test(K)){const[a,b]=K.replace(/\$/g,'').split(':');js+=`R("${a}","${b}")`}
  else if(/^[A-Z.]+$/.test(K)){if(!(K in F))throw new Error('#NOMBRE?');js+=`F["${K}"]`}
  else if(/^\$?[A-Z]{1,2}\$?\d+$/.test(K))js+=`C("${K.replace(/\$/g,'')}")`;
  else if(/^\d/.test(K))js+=K.endsWith('%')?`(${K.slice(0,-1)}/100)`:K;
  else js+={'^':'**','&':'+""+','=':'==','<>':'!=',';':','}[K]||K}
 const r=new Function('R','C','F','return '+js)(R,C,F);
 if(Array.isArray(r)||typeof r==='number'&&isNaN(r))throw new Error('#VALOR!');
 if(r===Infinity||r===-Infinity)throw new Error('#DIV/0!');
 return r}
function val(ref){
 if(ref in cache){if(cache[ref]===PEND)throw new Error('#CIRC!');return cache[ref]}
 cache[ref]=PEND;const r=raw[ref];let v;
 if(r===undefined||r==='')v='';
 else if(r[0]==='='){try{v=run(r.slice(1))}catch(e){v=/^#/.test(e.message)?e.message:'#ERROR!'}}
 else{const n=r.trim().replace(',','.');v=n!==''&&!isNaN(n)?Number(n):r}
 cache[ref]=v;return v}
const fmt=v=>typeof v==='number'?String(Math.round(v*1e6)/1e6):typeof v==='boolean'?(v?'VERDADERO':'FALSO'):String(v);
