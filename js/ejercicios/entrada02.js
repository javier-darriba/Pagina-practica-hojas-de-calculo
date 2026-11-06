/* Entrada 2 — FORMATO DE CADA EJERCICIO:
   d:    enunciado
   rows: datos de la hoja, fila a fila desde A1 ('' = celda vacía; las celdas con datos quedan bloqueadas)
   g:    celdas a resolver {celda:[valor esperado, regex opcional que debe cumplir la fórmula]}
   h:    pista (se muestra tras el 1.er fallo)
   s:    solución explicada (se muestra tras el 2.º fallo; admite HTML, p. ej. <code>=PROMEDIO(A1:A3)</code>) */
(window.ENTRADAS=window.ENTRADAS||[])[1]={titulo:'PROMEDIO',ejercicios:[
{d:'La función PROMEDIO devuelve la media aritmética de un grupo de celdas. Para obtener el promedio de votos electorales entre los 6 estados principales, escribe <code>=PROMEDIO(B2:B7)</code>',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{B8:[31.83333333,/AVERAGE/]},
 h:'Escribe =PROMEDIO( seguido del rango completo de celdas con los votos, desde B2 hasta B7.',
 s:'La función <code>PROMEDIO</code> suma todos los valores del rango y los divide entre el número total de celdas. El rango de votos es <code>B2:B7</code>, por lo que la fórmula es <code>=PROMEDIO(B2:B7)</code>.'},

{d:'Usa la función PROMEDIO para calcular el promedio de escaños demócratas en los seis estados.',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{C8:[20.16666667,/AVERAGE/]},
 h:'Haz lo mismo que en el ejercicio anterior, pero cambiando la columna B por la C (rango C2:C7).',
 s:'Los escaños demócratas están en la columna C. Para calcular su media en los seis estados, el rango es <code>C2:C7</code> y la fórmula queda <code>=PROMEDIO(C2:C7)</code>.'},

{d:'Usa la función PROMEDIO para calcular el promedio de escaños republicanos en los seis estados.',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{D8:[11.16666667,/AVERAGE/]},
 h:'Usa la función PROMEDIO indicando el rango de la columna D, desde D2 hasta D7.',
 s:'Los escaños republicanos están en la columna D. Para calcular su promedio en todos los estados, la fórmula es <code>=PROMEDIO(D2:D7)</code>.'},

{d:'Usa la función PROMEDIO para calcular el promedio de votos electorales de los 4 estados con más votos.',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{B8:[37.75,/AVERAGE/]},
 h:'Identifica las filas de los 4 primeros estados en la columna B (desde B2 hasta B5).',
 s:'Los 4 estados con más votos ocupan las filas 2 a 5. Por tanto, la fórmula que calcula su promedio usando el rango es <code>=PROMEDIO(B2:B5)</code>.'},

{d:'Usa la función PROMEDIO para calcular el promedio de escaños republicanos en el Congreso de los tres primeros estados de la lista.',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{D8:[12,/AVERAGE/]},
 h:'Los tres primeros estados corresponden a las filas de la 2 a la 4. Usa la columna D con dos puntos (:).',
 s:'Para los tres primeros estados, el rango de escaños republicanos es <code>D2:D4</code>. La fórmula es <code>=PROMEDIO(D2:D4)</code>.'},

{d:'¿Qué resultado daría <code>=PROMEDIO(D2)</code>?',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{D8:[6]},
 h:'El promedio de una sola celda devuelve el valor que contiene dicha celda.',
 s:'La función PROMEDIO aplicada a una sola celda (como <code>=PROMEDIO(D2)</code>) devuelve directamente el valor contenido en ella, que en este caso es 6.'},

{d:'¿Qué resultado daría <code>=PROMEDIO(1; 1; 1; 1; 1; 1; 1)</code>?',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{B8:[1]},
 h:'Si calculas la media de varios números idénticos, el resultado es ese mismo número.',
 s:'El promedio de un conjunto de números idénticos es siempre ese mismo número. La fórmula <code>=PROMEDIO(1; 1; 1; 1; 1; 1; 1)</code> da como resultado 1.'},

{d:'Usa la función PROMEDIO para calcular el promedio de votos electorales de Texas, Florida y Pennsylvania',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{B8:[29,/AVERAGE/]},
 h:'Como no forman un rango seguido, debes escribir cada celda separada por punto y coma (;).',
 s:'Texas está en B3, Florida en B5 y Pennsylvania en B7. Al no estar juntas, se separan con punto y coma: <code>=PROMEDIO(B3; B5; B7)</code>.'},

{d:'Usa la función PROMEDIO para calcular el promedio de escaños republicanos para California, New York y Illinois',
 rows:[['Estado','Votos electorales','Escaños demócratas','Escaños republicanos'],['California',55,47,6],['Texas',38,13,25],['New York',28,23,5],['Florida',29,13,16],['Illinois',20,15,5],['Pennsylvania',20,10,10]],
 g:{D8:[11.16666667,/AVERAGE/]},
 h:'Indica las celdas individuales de escaños republicanos para esos tres estados separándolas con punto y coma (;).',
 s:'California está en D2, New York en D4 e Illinois en D6. La fórmula correcta combinando celdas independientes es <code>=PROMEDIO(D2; D4; D6)</code>.'}
]};
