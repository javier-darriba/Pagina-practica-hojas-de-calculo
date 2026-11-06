/* Entrada 6 (opcional): CONTAR.SI y SUMAR.SI. En s van MÁS PISTAS, no la solución. */
(()=>{
const G=[['Categoría','Importe'],['Comida',20],['Ocio',30],['Comida',15],['Transporte',10],['Ocio',25],['Comida',35]];
const CS=/CONTAR\.SI\(|COUNTIF\(/,SS=/SUMAR\.SI\(|SUMIF\(/;
(window.ENTRADAS=window.ENTRADAS||[])[6]={titulo:'CONTAR.SI y SUMAR.SI (opcional)',opcional:true,ejercicios:[
{d:'La función <b>CONTAR.SI</b> cuenta cuántas celdas de un rango cumplen una condición. Se escribe <code>=CONTAR.SI(rango; criterio)</code> y, si el criterio es un texto, va entre comillas. En esta tabla de gastos, cuenta cuántos gastos son de «Comida».',
 rows:G,g:{B8:[3,CS]},h:'El rango es la columna donde está escrito el tipo de gasto (la de las categorías), no la de los importes. El criterio es el texto «Comida» entre comillas.',
 s:'La fórmula tiene la forma <code>=CONTAR.SI(A2:A7; ...)</code>, donde en lugar de los puntos va el texto que buscas, entre comillas. Debe dar 3.'},
{d:'Practica tú: usa CONTAR.SI para saber cuántos gastos son de «Ocio».',
 rows:G,g:{B8:[2,CS]},h:'Es el mismo tipo de fórmula que en el ejercicio anterior; solo cambia el texto que se busca.',
 s:'El rango sigue siendo el de las categorías. Cambia el texto del criterio por el que te piden y comprueba que está entre comillas. Debe dar 2.'},
{d:'La función <b>SUMAR.SI</b> suma solo los números que cumplen una condición. Se escribe <code>=SUMAR.SI(rango del criterio; criterio; rango que se suma)</code>. Calcula cuánto dinero se ha gastado en «Comida».',
 rows:G,g:{B8:[70,SS]},h:'Necesitas tres argumentos separados por <code>;</code>: la columna de las categorías, el texto «Comida» entre comillas y la columna de los importes (la que se suma).',
 s:'El primer y el tercer argumento son rangos del mismo tamaño que empiezan en la misma fila: uno es la columna A y el otro la columna B. Debe dar 70.'},
{d:'Practica SUMAR.SI: calcula cuánto dinero se ha gastado en «Ocio».',
 rows:G,g:{B8:[55,SS]},h:'Es igual que el ejercicio anterior, cambiando el texto del criterio.',
 s:'Repite la estructura del ejercicio anterior y cambia solo lo que va entre comillas. Debe dar 55.'},
{d:'El criterio también puede ser una comparación con un número, escrita entre comillas junto al signo, por ejemplo <code>"&gt;20"</code>. Usa CONTAR.SI para saber cuántos gastos son mayores que 20 €.',
 rows:G,g:{B8:[3,CS]},h:'Ahora el rango es el de los importes y el criterio es un único texto que contiene el signo y el número.',
 s:'La fórmula tiene solo dos argumentos: el rango de los importes y un criterio con el signo «mayor que» y el 20 juntos, todo entre comillas. Debe dar 3.'},
{d:'Con SUMAR.SI puedes usar un único rango cuando lo que se suma es lo mismo que lo que se comprueba. Calcula la suma de los gastos que son de 25 € o más.',
 rows:G,g:{B8:[90,SS]},h:'Solo necesitas dos argumentos: el rango de los importes y el criterio con el signo «mayor o igual» y el 25 entre comillas.',
 s:'El criterio se escribe todo junto y entre comillas: signo y número. Los gastos que lo cumplen son 30, 25 y 35. Debe dar 90.'},
{d:'El criterio puede estar en otra celda en vez de escribirse dentro de la fórmula. En la celda B9 está escrito «Ocio». Calcula con SUMAR.SI cuánto se ha gastado en la categoría que indica B9, sin escribir «Ocio» entre comillas.',
 rows:G.concat([['',''],['Categoría a buscar','Ocio']]),g:{B10:[55,SS]},h:'Donde antes ponías el texto entre comillas, escribe la referencia a la celda B9, sin comillas.',
 s:'Es como el ejercicio 4, pero el segundo argumento es una referencia a una celda en lugar de un texto. Debe dar 55.'},
{d:'El signo <code>&lt;&gt;</code> significa «distinto de». Usa CONTAR.SI para saber cuántos gastos NO son de «Comida». El criterio se escribe junto: el signo y el texto, todo entre comillas.',
 rows:G,g:{B8:[3,CS]},h:'El criterio es un único texto que empieza por el signo de distinto y sigue con la palabra, todo dentro de las mismas comillas.',
 s:'El criterio tiene esta forma: comillas, signo de distinto, palabra, comillas. Debe dar 3.'},
{d:'Combina funciones: calcula qué fracción del gasto total corresponde a «Comida» (gasto en comida dividido entre gasto total). Usa SUMAR.SI y SUMA.',
 rows:G,g:{B8:[0.5185,/(SUMAR\.SI|SUMIF)\(.*(SUMA|SUM)\(/]},h:'Es una división: arriba, el gasto en Comida (con SUMAR.SI); abajo, el gasto total (con SUMA).',
 s:'Los dos números salen de fórmulas que ya sabes hacer: la de arriba es la del ejercicio 3 y la de abajo suma toda la columna de importes. Debe dar aproximadamente 0.5185.'},
{d:'Reto: calcula la nota media solo de los alumnos aprobados (nota 5 o más), usando SUMAR.SI y CONTAR.SI con el mismo criterio.',
 rows:[['Alumno','Nota'],['Ana',7],['Luis',4],['Marta',9],['Pablo',5],['Sara',3]],g:{B7:[7,/(SUMAR\.SI|SUMIF)\(.*(CONTAR\.SI|COUNTIF)\(/]},
 h:'La media es una suma dividida entre una cantidad: la suma de las notas aprobadas entre cuántas notas aprobadas hay. Las dos salen de funciones con el mismo criterio.',
 s:'Arriba va SUMAR.SI sobre las notas con el criterio «mayor o igual que 5» y abajo CONTAR.SI con ese mismo criterio. Debe dar 7.'}
]};})();
