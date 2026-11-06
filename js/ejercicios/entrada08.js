/* Entrada 8 (opcional): repaso general. En s van MÁS PISTAS, no la solución. */
(()=>{
const N=[['Alumno','Mates','Lengua','Inglés'],['Ana',7,9,8],['Luis',5,6,4],['Marta',10,8,9],['Pablo',4,7,6],['Sara',8,3,'']];
(window.ENTRADAS=window.ENTRADAS||[])[7]={titulo:'Repaso general (opcional)',opcional:true,ejercicios:[
{d:'Repaso de todo lo visto. Esta tabla tiene las notas de cinco alumnos en tres asignaturas (a Sara le falta la nota de Inglés). Empieza por lo básico: calcula la suma de las tres notas de Ana.',
 rows:N,g:{B7:[24,/SUMA\(|SUM\(/]},h:'Es una suma de un rango horizontal: las tres notas de la fila de Ana. Debe dar 24.',s:'El rango empieza en la nota de Mates de Ana y acaba en su nota de Inglés, todo en la misma fila.'},
{d:'Calcula la nota media de Mates de toda la clase.',
 rows:N,g:{B7:[6.8,/PROMEDIO\(|AVERAGE\(/]},h:'Usa la función de la media con el rango de la columna de Mates (solo los cinco alumnos, sin el título). Debe dar 6.8.',s:'El rango va desde la primera nota de Mates hasta la última, en la misma columna.'},
{d:'Calcula la nota más alta de Lengua.',
 rows:N,g:{B7:[9,/MAX\(/]},h:'Usa la función que devuelve el valor más grande con el rango de la columna de Lengua. Debe dar 9.',s:'Fíjate en que la columna de Lengua es la tercera de la tabla (la C).'},
{d:'Calcula la nota más baja de toda la tabla de notas (las tres asignaturas juntas, sin contar nombres ni títulos).',
 rows:N,g:{B7:[3,/MIN\(/]},h:'Un rango puede ser un rectángulo: celda de arriba a la izquierda, dos puntos y celda de abajo a la derecha. Debe dar 3.',s:'El rectángulo va desde la primera nota de Mates de Ana hasta la última nota de Inglés de Sara.'},
{d:'Calcula cuántas notas de Inglés hay puestas (recuerda que a Sara le falta).',
 rows:N,g:{B7:[4,/CONTAR\(|COUNT\(/]},h:'Hay que contar celdas con números en la columna de Inglés. Las vacías no cuentan. Debe dar 4.',s:'Usa CONTAR (no CONTARA) con el rango de la columna D, de la fila 2 a la 6.'},
{d:'Usa la función SI para que salga «Aprobado» si la nota de Mates de Luis es 5 o más y «Suspenso» si no.',
 rows:N,g:{B7:['Aprobado',/SI\(|IF\(/]},h:'La condición compara la celda de Mates de Luis con 5 usando «mayor o igual». Los resultados son textos entre comillas.',s:'Ojo con el signo: con exactamente un 5 la condición debe cumplirse, así que no basta con «mayor que».'},
{d:'Pablo es mejor en una asignatura que en otra. Usa SI para que salga «Mejor en Mates» si su nota de Mates es mayor que la de Lengua y «Mejor en Lengua» si no.',
 rows:N,g:{B7:['Mejor en Lengua',/SI\(|IF\(/]},h:'La condición compara dos celdas de la fila de Pablo: la de Mates y la de Lengua. No escribas los números a mano.',s:'Si la nota de Mates es mayor que la de Lengua, devuelve el primer texto; en caso contrario, el segundo.'},
{d:'Usa CONTAR.SI para saber cuántos alumnos han suspendido Mates (nota menor que 5).',
 rows:N,g:{B7:[1,/CONTAR\.SI\(|COUNTIF\(/]},h:'El rango es la columna de Mates y el criterio es un texto con el signo «menor que» y el 5, todo entre comillas.',s:'El criterio tiene la forma: comillas, signo, número, comillas. Solo un alumno cumple la condición.'},
{d:'Usa SUMAR.SI para calcular la suma de las notas de Mates que están aprobadas (5 o más).',
 rows:N,g:{B7:[30,/SUMAR\.SI\(|SUMIF\(/]},h:'Con un solo rango (el de Mates) y un criterio con el signo «mayor o igual» y el 5 es suficiente. Debe dar 30.',s:'Las notas que cumplen son 7, 5, 10 y 8. Comprueba que el criterio está entre comillas.'},
{d:'Reto final: calcula qué fracción de la clase ha aprobado Mates (alumnos aprobados entre alumnos totales). Un resultado de 1 sería que aprueba toda la clase.',
 rows:N,g:{B7:[0.8,/(CONTAR\.SI|COUNTIF)\(.*(CONTARA|COUNTA)\(/]},h:'Es una división: arriba, cuántos alumnos tienen un 5 o más en Mates (CONTAR.SI); abajo, cuántos alumnos hay en total (CONTARA con los nombres).',s:'El numerador usa la columna de Mates con el criterio «mayor o igual que 5» y el denominador cuenta las celdas con nombre de la columna A. Debe dar 0.8.'}
]};})();
