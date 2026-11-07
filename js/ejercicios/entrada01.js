/* Entrada 1 — FORMATO DE CADA EJERCICIO (cópialo para crear los tuyos):
   d:    enunciado
   rows: datos de la hoja, fila a fila desde A1 ('' = celda vacía; las celdas con datos quedan bloqueadas)
   g:    celdas a resolver {celda:[valor esperado, regex opcional que debe cumplir la fórmula]}
   h:    pista (se muestra tras el 1.er fallo)
   s:    solución explicada (se muestra tras el 2.º fallo; admite HTML, p. ej. <code>=SUMA(A1:A3)</code>) */
(window.ENTRADAS=window.ENTRADAS||[])[0]={titulo:'SUMA',ejercicios:[
{d:'Vamos a empezar desde el principio. Todas las fórmulas empiezan con <code>=</code>. Calcula los ingresos totales de enero escribiendo <code>=B2+B3</code> y luego presiona «Comprobar».',
 rows:[['','Enero'],['Ingresos producto',100],['Ingresos servicio',150],['Total','']],
 g:{B4:[250,/SUM/]},h:'Vuelve a leer el enunciado, la solución está escrita en él.',
 s:'La fórmula <code>=B2+B3</code> te dará la suma de los valores de la celda B2 y la celda B3 porque el operador + suma los números.'},
{d:'Una mejor forma de sumar números es usar la función <b>SUMA</b>. Calcula los ingresos totales de enero escribiendo <code>=SUMA(B2; B3)</code> Fíjate cómo los argumentos de la función están separados por punto y coma.',
 rows:[['','Enero'],['Ingresos producto',100],['Ingresos servicio',150],['Total','']],
 g:{B4:[150,/SUM/]},h:'Vuelve a leer el enunciado, la solución está escrita en él.',
 s:'La fórmula <code>=SUMA(B2; B3)</code> devuelve la suma de todas las celdas que están entre paréntesis, que son las celdas B2 y B3.'},
{d:'Puedes pasar un grupo de celdas a una función usando dos puntos. <code>B2:B6</code> le dice a Excel «todas las celdas desde B2 hasta B6». Calcula los ingresos de enero escribiendo <code>=SUMA(B2:B6)</code>',
 rows:[['','Enero'],['Ingresos producto a',100],['Ingresos producto b',150],['Ingresos producto c',250],['Ingresos servicio',200],['Ingresos consultoría',50],['Total','']],
 g:{B7:[750,/SUM/]},h:'No del todo. La solución tiene que dar 750. ¡Inténtalo de nuevo!.',
 s:'La fórmula <code>=SUMA(B2:B6)</code> devuelve la suma de los valores que hay en cada celda de un rango de celdas. El rango <b>B2:B6</b> significa «todas las celdas desde B2 hasta B6».'},
{d:'Ahora usa la función SUMA para calcular los ingresos totales de febrero.',
 rows:[['','Enero','Febrero'],['Ingresos producto a',100,200],['Ingresos producto b',150,350],['Ingresos producto c',250,150],['Ingresos servicio',200,100],['Ingresos consultoría',50,200],['Total','','']],
 g:{C7:[1000,/SUM/]},h:'No del todo. La solución tiene que dar 1000. ¡Inténtalo de nuevo!',
 s:'La pregunta pide los ingresos totales de febrero, que están en la columna C. Así que la fórmula <code>=SUMA(C2:C6)</code> te daría la suma de los ingresos en las celdas del rango C2:C6.'},
{d:'El director financiero te dice que los ingresos de febrero se reportaron mal y que hay que aumentar el total en $100. Escribe <code>=SUMA(C2:C6; 100)</code>',
 rows:[['','Enero','Febrero'],['Ingresos producto a',100,200],['Ingresos producto b',150,350],['Ingresos producto c',250,150],['Ingresos servicio',200,100],['Ingresos consultoría',50,200],['Total','','']],
 g:{C7:[1100,/SUM/]},h:'Vuelve a leer el enunciado, la solución está escrita en él.',
 s:'Recuerda que la función SUMA suma todo lo que está dentro de los paréntesis y separado por comas. Así que la fórmula <code>=SUMA(C2:C6; 100)</code> sumaría 100 a la suma del rango de celdas C2:C6.'},
{d:'Usa la función SUMA con el argumento <code>B7:G7</code> para calcular los ingresos totales de enero a junio.',
 rows:[['','Enero','Febrero','Marzo','Abril','Mayo','Junio'],['Ingresos producto a',100,200,100,300,200,200],['Ingresos producto b',150,350,150,200,350,300],['Ingresos producto c',250,150,50,200,250,100],['Ingresos servicio',200,100,150,150,200,300],['Ingresos consultoría',50,200,150,100,250,350],['Total',750,100,600,950,1250,1250]],
 g:{G8:[5800,/SUM/]},h:'No del todo. La solución tiene que dar 5800. ¡Inténtalo de nuevo!.',
 s:'Fíjate que hay una fila llamada «Total» en la fila 7, así que para calcular el total de todos los meses, la fórmula <code>=SUMA(B7:G7)</code> te da la suma de todas las celdas del rango horizontal B7:G7.'},
{d:'Usa la función SUMA para calcular los ingresos totales del Producto A, el Producto C y Consultoría, todo esto <b>SOLO</b> para <b>ENERO</b>. Sugerencia: Los argumentos se ven así <code>(?; ?; ?)</code>',
 rows:[['','Enero','Febrero','Marzo','Abril','Mayo','Junio'],['Ingresos producto a',100,200,100,300,200,200],['Ingresos producto b',150,350,150,200,350,300],['Ingresos producto c',250,150,50,200,250,100],['Ingresos servicio',200,100,150,150,200,300],['Ingresos consultoría',50,200,150,100,250,350],['Total',750,100,600,950,1250,1250]],
 g:{B8:[400,/SUM/]},h:'No del todo. La solución tiene que dar 400. ¡Inténtalo de nuevo!.',
 s:'Fíjate que los ingresos del Producto A están en la fila 2, los del Producto C en la fila 4 y los de Consultoría en la fila 6. Así que, para calcular el total de estas tres fuentes de ingresos solo en enero (columna B), la fórmula <code>=SUMA(B2; B4; B6)</code> te daría el resultado.'},
{d:'Usa la función SUMA para calcular los ingresos totales del Producto A, el Producto C y la Consultoría para todos los meses. Sugerencia: Los argumentos se ven así <code>(?:?; ?:?; ?:?)</code>',
 rows:[['','Enero','Febrero','Marzo','Abril','Mayo','Junio'],['Ingresos producto a',100,200,100,300,200,200],['Ingresos producto b',150,350,150,200,350,300],['Ingresos producto c',250,150,50,200,250,100],['Ingresos servicio',200,100,150,150,200,300],['Ingresos consultoría',50,200,150,100,250,350],['Total',750,100,600,950,1250,1250]],
 g:{B8:[3200,/SUM/]},h:'No del todo. La solución tiene que dar 3200. ¡Inténtalo de nuevo!.',
 s:'Fíjate que los ingresos del Producto A están en la fila 2, los del Producto C en la fila 4 y los de Consultoría en la fila 6. Así que, para calcular el total de estas tres fuentes de ingresos de todos los meses, tendríamos que sumar tres rangos horizontales de celdas. Así que la fórmula <code>=SUMA(B2:G2; B4:G4; B6:G6)</code> te daría el total correcto.'},
{d:'Usa la función SUMA para calcular los ingresos totales del Producto A, el Producto B y el Producto C para todos los meses. Sugerencia: solo necesitas un argumento que se vea así <code>(?:?)</code>',
 rows:[['','Enero','Febrero','Marzo','Abril','Mayo','Junio'],['Ingresos producto a',100,200,100,300,200,200],['Ingresos producto b',150,350,150,200,350,300],['Ingresos producto c',250,150,50,200,250,100],['Ingresos servicio',200,100,150,150,200,300],['Ingresos consultoría',50,200,150,100,250,350],['Total',750,100,600,950,1250,1250]],
 g:{B8:[3600,/SUM/]},h:'No del todo. La solución tiene que dar 3600. ¡Inténtalo de nuevo!.',
 s:'Para calcular la suma de los ingresos de las tres primeras fuentes de ingresos de todos los meses, podemos usar la función SUMA con un rango rectangular de celdas. La fórmula <code>=SUMA(B2:G4)</code> sumaría el contenido de todas las celdas necesarias.'},
{d:'Usa la función SUMA para calcular el total de los ingresos del Producto A de TODOS los meses, más los ingresos de ENERO de las otras cuatro filas: Producto B, Producto C, Servicios y Consultoría (filas 3 a 6). Sugerencia: Tus argumentos se verán así <code>(?:?; ?:?)</code>',
 rows:[['','Enero','Febrero','Marzo','Abril','Mayo','Junio'],['Ingresos producto a',100,200,100,300,200,200],['Ingresos producto b',150,350,150,200,350,300],['Ingresos producto c',250,150,50,200,250,100],['Ingresos servicio',200,100,150,150,200,300],['Ingresos consultoría',50,200,150,100,250,350],['Total',750,100,600,950,1250,1250]],
 g:{B8:[1750,/SUM/]},h:'No del todo. La solución tiene que dar 1750. ¡Inténtalo de nuevo!.',
 s:'La función SUMA admite más de un rango. El rango horizontal del Producto A para todos los meses es <code>B2:G2</code>; el rango vertical de enero para las otras cuatro filas (Producto B, Producto C, Servicios y Consultoría) es <code>B3:B6</code>. Así que =SUMA(B2:G2; B3:B6) suma los dos rangos. Fíjate dónde empieza el segundo rango: <b>B3, no B2</b>. B2 ya está dentro de B2:G2, y SUMA cuenta una celda una vez por cada rango que la contenga; por eso <code>B2:B6</code> contaría dos veces los ingresos de enero del Producto A y exageraría el total en 100.'}
]};
