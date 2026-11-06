/* app.js — interfaz, flujo de ejercicios y cuentas (Supabase) */
const USER_DOMAIN='practica-excel.es';   // dominio interno: los alumnos nunca lo ven
const PAD='#excel';                        // Supabase exige >= 6 caracteres: se añade solo a la contraseña
const userOf=e=>String(e).split('@')[0];
let sb;try{sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY)}catch(e){}
let me=null,prof={},prog={},signup=false,E=0,X=0,locked=new Set(),G={};
const fails={};                                   // fallos en esta sesión, por ejercicio
const pid=(e,x)=>(e+1)*100+x+1;                   // id de progreso: entrada 1, ejercicio 1 = 101
const isDone=(e,x)=>!!(prog[pid(e,x)]&&prog[pid(e,x)].done);
const nEx=e=>ENTRADAS[e].ejercicios.length;
const nDone=e=>ENTRADAS[e].ejercicios.filter((_,x)=>isDone(e,x)).length;
const cur=()=>ENTRADAS[E].ejercicios[X];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function show(w){$('auth').hidden=w!=='auth';$('top').hidden=w==='auth';$('app').hidden=w!=='app';$('panel').hidden=w!=='panel'}
function refresh(){cache={};document.querySelectorAll('#grid input').forEach(i=>{const ref=i.dataset.r,v=val(ref);
 i.classList.toggle('err',typeof v==='string'&&/^#/.test(v)&&raw[ref]!==v);
 i.style.textAlign=typeof v==='number'?'right':'left';
 if(i!==document.activeElement)i.value=raw[ref]===undefined?'':fmt(v)})}
function build(){let h='<table><tr><th></th>'+COLS.map(c=>`<th>${c}</th>`).join('')+'</tr>';
 for(let r=1;r<=ROWS;r++){h+=`<tr><th>${r}</th>`;for(const c of COLS){const ref=c+r,l=locked.has(ref);h+=`<td><input data-r="${ref}" class="${ref in G?'goal':l?'lock':''}" ${l?'readonly':''} autocomplete="off" spellcheck="false"></td>`}h+='</tr>'}
 $('grid').innerHTML=h+'</table>';refresh()}

function lst(){$('list').innerHTML='';
 ENTRADAS.forEach((en,e)=>{const b=document.createElement('button');b.className=e===E?'on':'';b.innerHTML=`${e+1}. ${esc(en.titulo)} <small>${nDone(e)}/${nEx(e)}</small>`;b.onclick=()=>openEntrada(e);$('list').appendChild(b)});
 $('prog').textContent=ENTRADAS.reduce((a,_,e)=>a+nDone(e),0)+' ejercicios completados'}
function nav(){$('exnav').innerHTML='';
 ENTRADAS[E].ejercicios.forEach((_,x)=>{const b=document.createElement('button'),lk=x>0&&!isDone(E,x-1),dn=isDone(E,x);
  b.textContent=(x+1)+(dn?' ✓':lk?' 🔒':'');b.disabled=lk;b.className=(x===X?'on ':'')+(dn?'ok':'');b.onclick=()=>go(E,x);$('exnav').appendChild(b)})}
function openEntrada(e){const f=ENTRADAS[e].ejercicios.findIndex((_,x)=>!isDone(e,x));go(e,f<0?0:f)}
/* Pista tras el 1.er fallo; pista + solución explicada tras el 2.º */
function showHelp(){const f=fails[pid(E,X)]||0,a=$('aux');a.hidden=f<1;
 if(f>=1)a.innerHTML='<b>Pista:</b> '+cur().h+(f>=2?'<br><br><b>Solución explicada:</b> '+cur().s:'')}
const nxtLabel=()=>X<nEx(E)-1?'Siguiente ejercicio →':E<ENTRADAS.length-1?'Siguiente entrada →':'¡Has terminado todo!';
function go(e,x){E=e;X=x;const en=ENTRADAS[e],ex=en.ejercicios[x];raw={};locked=new Set();G=ex?ex.g:{};
 $('title').textContent=`${e+1}. ${en.titulo}`+(ex?` · Ejercicio ${x+1} de ${nEx(e)}`:'');
 $('desc').innerHTML=ex?ex.d:'Esta entrada aún no tiene ejercicios.';$('work').hidden=!ex;
 if(ex)ex.rows.forEach((row,ri)=>row.forEach((v,ci)=>{if(v!==''){const ref=COLS[ci]+(ri+1);raw[ref]=String(v);locked.add(ref)}}));
 $('msg').textContent='';$('msg').className='';$('fb').textContent='Selecciona una celda amarilla';
 $('nxt').hidden=!ex||!isDone(e,x);$('nxt').textContent=nxtLabel();
 if(ex)build();showHelp();lst();nav()}
function check(){cache={};const ex=cur(),errs=[];
 for(const[ref,[exp,re]]of Object.entries(ex.g)){const r=raw[ref]||'';
  if(r[0]!=='='){errs.push(`${ref}: escribe una fórmula (empieza por =), no el resultado a mano.`);continue}
  const v=val(ref),ok=typeof exp==='number'?typeof v==='number'&&Math.abs(v-exp)<.005:String(v).trim().toLowerCase()===String(exp).toLowerCase();
  if(!ok)errs.push(`${ref}: ahora da «${fmt(v)}», que no es el valor esperado.`);
  else if(re&&!re.test(r.toUpperCase()))errs.push(`${ref}: el resultado es correcto, pero el ejercicio pide usar otra función o referencia.`)}
 const m=$('msg'),k=pid(E,X);
 if(errs.length){fails[k]=(fails[k]||0)+1;m.className='ko';m.innerHTML=errs.map(x=>'• '+x).join('<br>');showHelp();record(false)}
 else{m.className='ok';m.textContent=X<nEx(E)-1?'¡Correcto! Ya puedes pasar al siguiente ejercicio.':'¡Correcto! Has completado esta entrada.';$('nxt').hidden=false;record(true)}}
const g=$('grid');
g.addEventListener('focusin',e=>{const i=e.target;if(i.tagName!=='INPUT')return;i.value=raw[i.dataset.r]||'';$('fb').textContent=i.dataset.r+' :  '+(raw[i.dataset.r]||'')});
g.addEventListener('input',e=>{const i=e.target;raw[i.dataset.r]=i.value;$('fb').textContent=i.dataset.r+' :  '+i.value;refresh()});
g.addEventListener('focusout',e=>{if(e.target.tagName==='INPUT'){if(e.target.value==='')delete raw[e.target.dataset.r];refresh()}});
g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='ArrowDown'||e.key==='ArrowUp'){const[c,r]=[e.target.dataset.r[0],+e.target.dataset.r.slice(1)],n=g.querySelector(`[data-r="${c}${r+(e.key==='ArrowUp'?-1:1)}"]`);if(n){e.preventDefault();n.focus()}}});
['copy','cut','paste','contextmenu','dragstart','drop'].forEach(ev=>$('app').addEventListener(ev,e=>e.preventDefault()));
$('chk').onclick=check;
$('nxt').onclick=()=>{X<nEx(E)-1?go(E,X+1):E<ENTRADAS.length-1?openEntrada(E+1):0};
$('rst').onclick=()=>go(E,X);
/* ===== Cuentas y registro ===== */
async function record(ok){const k=pid(E,X),p=prog[k]||{exercise:k,attempts:0,done:false};p.attempts++;if(ok)p.done=true;prog[k]=p;lst();nav();
 const{error}=await sb.from('progress').upsert({user_id:me.id,exercise:k,attempts:p.attempts,done:p.done,updated_at:new Date().toISOString()});
 if(error)$('msg').textContent='No se pudo guardar tu progreso: '+error.message}
async function enter(u){me=u;
 const{data:p}=await sb.from('profiles').select('*').eq('id',u.id).single();prof=p||{};
 const{data:rows}=await sb.from('progress').select('*').eq('user_id',u.id);prog={};(rows||[]).forEach(r=>prog[r.exercise]=r);
 $('who').textContent=(prof.full_name||userOf(u.email))+(prof.role==='teacher'?' · profesor':'');$('bpan').hidden=prof.role!=='teacher';
 show('app');openEntrada(Math.max(0,ENTRADAS.findIndex((_,e)=>nEx(e)&&nDone(e)<nEx(e))))}
async function init(){if(!sb){show('auth');$('amsg').textContent='Falta configurar Supabase en js/config.js.';return}
 const{data:{session}}=await sb.auth.getSession();if(session)enter(session.user);else show('auth')}
$('aswap').onclick=()=>{signup=!signup;$('aname').hidden=!signup;$('atitle').textContent=signup?'Crear cuenta':'Entrar';$('ago').textContent=signup?'Registrarme':'Entrar';$('aswap').textContent=signup?'Ya tengo cuenta':'Crear cuenta'};
$('ago').onclick=async()=>{const m=$('amsg');m.textContent='';if(!sb){m.textContent='Falta configurar Supabase en js/config.js.';return}
 const user=$('aemail').value.trim().toLowerCase(),pw=$('apass').value,name=$('aname').value.trim();
 if(!user||!pw){m.textContent='Escribe tu nombre de usuario y tu contraseña.';return}
 if(!user.includes('@')&&!/^[a-z0-9._-]+$/.test(user)){m.textContent='El usuario solo puede tener letras sin tilde, números, punto, guion y guion bajo (sin espacios).';return}
 if(signup&&!name){m.textContent='Escribe tu nombre y apellidos.';return}
 const email=user.includes('@')?user:user+'@'+USER_DOMAIN;let r;
 if(signup)r=await sb.auth.signUp({email,password:pw+PAD,options:{data:{full_name:name}}});
 else{r=await sb.auth.signInWithPassword({email,password:pw+PAD});if(r.error)r=await sb.auth.signInWithPassword({email,password:pw})}
 if(r.error){const t=r.error.message;m.textContent=/already|registered/i.test(t)?'Ese nombre de usuario ya existe. Elige otro.':/invalid login/i.test(t)?'Usuario o contraseña incorrectos.':t;return}
 if(!r.data.session){m.textContent='Cuenta creada, pero Supabase pide confirmar el correo: desactiva «Confirm email» en Authentication.';return}
 enter(r.data.user)};
$('bout').onclick=async()=>{await sb.auth.signOut();me=null;show('auth')};
$('bpan').onclick=async()=>{if(!$('panel').hidden){show('app');return}
 show('panel');$('panel').textContent='Cargando…';
 const[a,b]=await Promise.all([sb.from('profiles').select('*').eq('role','student').order('full_name'),sb.from('progress').select('*')]);
 const by={};(b.data||[]).forEach(r=>{(by[r.user_id]=by[r.user_id]||{})[r.exercise]=r});
 const tot=ENTRADAS.reduce((s,_,e)=>s+nEx(e),0);
 let h='<h2>Progreso de la clase</h2><div class="wrap"><table class="pan"><tr><th>Alumno</th>'+ENTRADAS.map((en,e)=>`<th title="${esc(en.titulo)}">E${e+1}</th>`).join('')+'<th>Total</th><th>Intentos</th></tr>';
 (a.data||[]).forEach(p=>{const m=by[p.id]||{};let n=0,at=0;
  const cells=ENTRADAS.map((en,e)=>{let c=0;en.ejercicios.forEach((_,x)=>{const r=m[pid(e,x)];if(r){at+=r.attempts;if(r.done)c++}});n+=c;return `<td>${nEx(e)?c+'/'+nEx(e):'–'}</td>`}).join('');
  h+=`<tr><td>${esc(p.full_name||'')} <small>(${esc(userOf(p.email))})</small></td>${cells}<td>${n}/${tot}</td><td>${at}</td></tr>`});
 $('panel').innerHTML=h+'</table></div><p class="note">E1…E10 = entradas (ejercicios completados / total). Pasa el ratón por la cabecera para ver el título.</p>'};
init();
