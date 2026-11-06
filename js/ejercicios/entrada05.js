/* Entrada 5: CONTAR y CONTARA */
(()=>{
const NOTAS=[['Alumno','Nota'],['Ana',7],['Luis',''],['Marta',9],['Pablo',6],['Sara','']];
const VENTAS=[['Día','Ventas'],['Lunes',120],['Martes',''],['Miércoles',90],['Jueves',''],['Viernes',150],['Sábado',80]];
const PRECIOS=[['Producto','Precio'],['Pan',1.2],['Leche','agotado'],['Queso',3.5],['Huevos','agotado'],['Agua',0.5]];
const ASIST=[['Alumno','Asistencia'],['Ana','Sí'],['Luis','No'],['Marta','Sí'],['Pablo',''],['Sara','Sí']];
const CT=/CONTAR\(|COUNT\(/,CA=/CONTARA\(|COUNTA\(/;
(window.ENTRADAS=window.ENTRADAS||[])[5]={titulo:'CONTAR y CONTARA',ejercicios:[
{d:'Cuando una tabla tiene huecos, a veces interesa saber cuántas celdas tienen un valor. La función <b>CONTAR</b> cuenta cuántas celdas de un rango contienen números (ignora las vacías). Algunos alumnos todavía no tienen nota. Escribe <code>=CONTAR(B2:B6)</code> para saber a cuántos alumnos se les ha puesto nota.',
 rows:NOTAS,g:{B7:[3,CT]},
 h:'Escribe la fórmula tal cual: <code>=CONTAR(</code>, el rango de las notas y el paréntesis de cierre. Debe dar 3.',
 s:'<code>=CONTAR(B2:B6)</code> recorre de B2 a B6 y cuenta solo las celdas con un número: 7, 9 y 6. Las dos celdas vacías no cuentan, así que da 3.'},
{d:'Practica tú. Un negocio apunta las ventas de cada día, pero algunos días se le ha olvidado apuntarlas. Usa CONTAR para saber en cuántos días se han anotado ventas.',
 rows:VENTAS,g:{B8:[4,CT]},
 h:'Usa CONTAR con el rango de la columna de ventas, desde el primer día hasta el último. Las celdas vacías no se cuentan. Debe dar 4.',
 s:'<code>=CONTAR(B2:B7)</code>. Hay ventas anotadas el lunes, el miércoles, el viernes y el sábado: 4 días.'},
{d:'CONTAR solo cuenta números: si una celda contiene texto, la ignora igual que si estuviera vacía. En esta lista, algunos productos tienen el texto «agotado» en lugar de precio. Usa CONTAR para saber cuántos productos tienen precio.',
 rows:PRECIOS,g:{B7:[3,CT]},
 h:'Usa CONTAR con el rango de los precios. Piensa qué celdas contienen un número y cuáles contienen texto. Debe dar 3.',
 s:'<code>=CONTAR(B2:B6)</code>. Los precios son 1.2, 3.5 y 0.5; las dos celdas con «agotado» son texto y CONTAR no las cuenta. Resultado: 3.'},
{d:'Si quieres contar también las celdas que contienen texto, usa la función <b>CONTARA</b>: cuenta todas las celdas que no están vacías, tengan números o texto. Pablo no ha contestado si ha venido a clase. Escribe <code>=CONTARA(B2:B6)</code> para saber cuántos alumnos han contestado.',
 rows:ASIST,g:{B7:[4,CA]},
 h:'Fíjate en la última letra: la función se llama CONTAR<b>A</b>. El rango son las celdas de la asistencia, de la primera a la última. Debe dar 4.',
 s:'<code>=CONTARA(B2:B6)</code> cuenta las celdas que no están vacías: «Sí», «No», «Sí» y «Sí». La de Pablo está vacía y no cuenta. Resultado: 4.'},
{d:'Practica CONTARA: en esta lista hay nombres de alumnos, que son texto. Usa CONTARA para saber cuántos alumnos hay en la clase.',
 rows:[['Alumno'],['Ana'],['Luis'],['Marta'],['Pablo'],['Sara'],['Julia']],g:{A8:[6,CA]},
 h:'Como los nombres son texto, CONTAR no serviría aquí. Usa la otra función con el rango de la columna de nombres. Debe dar 6.',
 s:'<code>=CONTARA(A2:A7)</code> cuenta las 6 celdas con un nombre. Con CONTAR habría dado 0, porque no hay ningún número.'},
{d:'Vamos a comparar las dos funciones sobre la misma tabla de productos. En la primera celda amarilla usa CONTAR para saber cuántos productos tienen un precio numérico y en la segunda usa CONTARA para saber cuántos productos tienen algo escrito (precio o «agotado»).',
 rows:PRECIOS,g:{B7:[3,CT],B8:[5,CA]},
 h:'La primera fórmula es la misma que en el ejercicio 3 y la segunda cambia solo el nombre de la función. Resultados: 3 y 5.',
 s:'<code>=CONTAR(B2:B6)</code> = 3 (solo los números) y <code>=CONTARA(B2:B6)</code> = 5 (todas las celdas con algo escrito).'},
{d:'Un rango puede ser un rectángulo con varias columnas. Esta tabla muestra las ventas de cuatro productos en enero y febrero, con huecos donde no se vendió nada. Usa CONTAR con un único rango rectangular para saber cuántas celdas tienen ventas.',
 rows:[['Producto','Enero','Febrero'],['A',10,''],['B','',20],['C',15,30],['D','','']],g:{B6:[4,CT]},
 h:'Un rectángulo se escribe con la celda de arriba a la izquierda, dos puntos y la celda de abajo a la derecha. Incluye solo las celdas con datos, sin los títulos. Debe dar 4.',
 s:'<code>=CONTAR(B2:C5)</code> cuenta los números de las dos columnas: 10, 20, 15 y 30. Resultado: 4.'},
{d:'Se pueden combinar las dos funciones. Usa una sola fórmula para saber cuántos alumnos todavía no tienen nota: cuenta el total de alumnos con CONTARA y réstale los alumnos con nota, que cuentas con CONTAR.',
 rows:NOTAS,g:{B7:[2,/CONTARA\(.*CONTAR\(|CONTAR\(.*CONTARA\(|COUNTA\(.*COUNT\(|COUNT\(.*COUNTA\(/]},
 h:'Es una resta de dos resultados: el primero cuenta todas las celdas con algo en la columna de los nombres y el segundo cuenta solo las notas. Debe dar 2.',
 s:'<code>=CONTARA(A2:A6)-CONTAR(B2:B6)</code> = 5 - 3 = 2. Hay 5 alumnos en total y solo 3 tienen nota, así que a 2 les falta.'},
{d:'Ahora calcula qué parte de la clase ya tiene nota. Divide los alumnos con nota (CONTAR) entre el total de alumnos (CONTARA) en una sola fórmula. El resultado será un número decimal.',
 rows:NOTAS,g:{B7:[0.6,/CONTARA\(.*CONTAR\(|CONTAR\(.*CONTARA\(|COUNTA\(.*COUNT\(|COUNT\(.*COUNTA\(/]},
 h:'Es una división: arriba va el número de alumnos con nota y abajo el total de alumnos. Debe dar 0.6.',
 s:'<code>=CONTAR(B2:B6)/CONTARA(A2:A6)</code> = 3 / 5 = 0.6, es decir, el 60 % de la clase ya tiene nota.'},
{d:'Repaso: con la tabla de asistencia, calcula en la primera celda amarilla cuántos alumnos han contestado y en la segunda cuántos todavía no han contestado (alumnos totales menos los que han contestado).',
 rows:ASIST,g:{B7:[4,CA],B8:[1,/CONTARA\(.*CONTARA\(|COUNTA\(.*COUNTA\(/]},
 h:'La primera es como la del ejercicio 4. En la segunda, cuenta los alumnos de la columna de nombres y réstales los que han contestado. Resultados: 4 y 1.',
 s:'<code>=CONTARA(B2:B6)</code> = 4 y <code>=CONTARA(A2:A6)-CONTARA(B2:B6)</code> = 5 - 4 = 1.'}
]};})();
