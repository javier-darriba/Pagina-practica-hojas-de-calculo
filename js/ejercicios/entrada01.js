/* Entrada 1 — FORMATO DE CADA EJERCICIO (cópialo para crear los tuyos):
   d:    enunciado
   rows: datos de la hoja, fila a fila desde A1 ('' = celda vacía; las celdas con datos quedan bloqueadas)
   g:    celdas a resolver {celda:[valor esperado, regex opcional que debe cumplir la fórmula]}
   h:    pista (se muestra tras el 1.er fallo)
   s:    solución explicada (se muestra tras el 2.º fallo; admite HTML, p. ej. <code>=SUMA(A1:A3)</code>) */
(window.ENTRADAS=window.ENTRADAS||[])[0]={titulo:'Fórmulas básicas',ejercicios:[
{d:'Calcula en B7 el total de las ventas de la semana con la función SUMA.',
 rows:[['Día','Ventas'],['Lunes',120],['Martes',85],['Miércoles',140],['Jueves',95],['Viernes',160],['Total','']],
 g:{B7:[600,/SUM/]},h:'Empieza con =SUMA( y selecciona las celdas de B2 a B6.',
 s:'SUMA suma todos los números de un rango. Las ventas están en B2:B6, así que la fórmula es <code>=SUMA(B2:B6)</code> y da 600.'},
{d:'Calcula el beneficio de cada mes en la columna D: ingresos menos gastos.',
 rows:[['Mes','Ingresos','Gastos','Beneficio'],['Enero',1200,800,''],['Febrero',1500,950,''],['Marzo',1100,1200,'']],
 g:{D2:[400],D3:[550],D4:[-100]},h:'Resta las celdas con el signo -, por ejemplo =B2-C2.',
 s:'Una fórmula puede operar con referencias a celdas. En D2: <code>=B2-C2</code>. Se repite en cada fila cambiando el número (D3: <code>=B3-C3</code>…). Marzo da -100 porque gastas más de lo que ingresas.'},
{d:'Calcula en D2:D5 el importe de cada producto (precio × unidades) y en D6 el total general.',
 rows:[['Producto','Precio','Uds.','Total'],['Cuaderno',2,10,''],['Bolígrafo',1,25,''],['Carpeta',3,8,''],['Mochila',25,2,''],['Total general','','','']],
 g:{D2:[20],D3:[25],D4:[24],D5:[50],D6:[119,/SUM/]},h:'Multiplica con * (=B2*C2) y suma el total con SUMA.',
 s:'Cada importe es <code>=B2*C2</code> (y así en las demás filas). El total general suma los importes: <code>=SUMA(D2:D5)</code> = 119.'},
{d:'Calcula en D el precio de cada unidad de los packs (precio total ÷ unidades).',
 rows:[['Pack','Precio total','Unidades','Precio/ud.'],['Folios',12,4,''],['Lápices',9,6,''],['Gomas',5,10,'']],
 g:{D2:[3],D3:[1.5],D4:[0.5]},h:'La división se escribe con / , por ejemplo =B2/C2.',
 s:'Precio por unidad = precio total / unidades: <code>=B2/C2</code> da 3 en los folios. Haz lo mismo en D3 y D4.'},
{d:'Calcula en B7 la nota media de la clase con la función PROMEDIO.',
 rows:[['Alumno','Nota'],['Ana',7],['Luis',5],['Marta',9],['Pablo',6],['Sara',8],['Media','']],
 g:{B7:[7,/AVERAGE|PROMEDIO/]},h:'PROMEDIO suma los valores y los divide entre cuántos son. Selecciona B2:B6.',
 s:'<code>=PROMEDIO(B2:B6)</code> calcula (7+5+9+6+8)/5 = 7.'},
{d:'Calcula la nota máxima en B7 y la mínima en B8.',
 rows:[['Alumno','Nota'],['Ana',7],['Luis',5],['Marta',9],['Pablo',6],['Sara',8],['Máxima',''],['Mínima','']],
 g:{B7:[9,/MAX/],B8:[5,/MIN/]},h:'Las funciones se llaman MAX y MIN, y ambas reciben el rango B2:B6.',
 s:'<code>=MAX(B2:B6)</code> devuelve el valor más alto (9) y <code>=MIN(B2:B6)</code> el más bajo (5).'},
{d:'Cuenta en B7 cuántos alumnos tienen nota puesta (algunas celdas están vacías).',
 rows:[['Alumno','Nota'],['Ana',7],['Luis',''],['Marta',9],['Pablo',6],['Sara',''],['Notas puestas','']],
 g:{B7:[3,/COUNT|CONTAR/]},h:'La función CONTAR cuenta las celdas que contienen números e ignora las vacías.',
 s:'<code>=CONTAR(B2:B6)</code> da 3, porque solo Ana, Marta y Pablo tienen número. No confundas CONTAR con SUMA: no suma valores, cuenta celdas.'},
{d:'Calcula en B5 el total a pagar: al precio sin IVA se le resta el descuento y al resultado se le aplica el IVA.',
 rows:[['Concepto','Valor'],['Precio sin IVA',80],['Descuento (€)',10],['IVA',0.21],['Total a pagar','']],
 g:{B5:[84.7,/\(/]},h:'Usa paréntesis: primero la resta y después multiplicar por (1+IVA).',
 s:'Excel respeta la prioridad de operaciones: los paréntesis van primero. <code>=(B2-B3)*(1+B4)</code> = 70 × 1,21 = 84,7. Sin paréntesis, la multiplicación se haría antes que la resta y saldría otro resultado.'},
{d:'Calcula en B4 el precio final del móvil aplicando el descuento del 15 %.',
 rows:[['Producto','Precio'],['Móvil',200],['Descuento',0.15],['Precio final','']],
 g:{B4:[170]},h:'Precio final = precio × (1 - descuento).',
 s:'Pagar con un 15 % de descuento es pagar el 85 %: <code>=B2*(1-B3)</code> = 200 × 0,85 = 170. También valdría <code>=B2-B2*B3</code>.'},
{d:'Repaso: completa la factura. Importes en D2:D4, subtotal en D5, IVA (21 %) en D6 y total en D7.',
 rows:[['Concepto','Cantidad','Precio','Importe'],['Camisetas',3,15,''],['Pantalones',2,28,''],['Gorras',4,9,''],['Subtotal','','',''],['IVA 21%','','',''],['Total','','','']],
 g:{D2:[45],D3:[56],D4:[36],D5:[137,/SUM/],D6:[28.77],D7:[165.77]},h:'Importe = cantidad × precio; subtotal con SUMA; IVA = subtotal × 0,21; total = subtotal + IVA.',
 s:'D2: <code>=B2*C2</code> (igual en D3 y D4). D5: <code>=SUMA(D2:D4)</code> = 137. D6: <code>=D5*0,21</code> → escríbelo con punto: <code>=D5*0.21</code> = 28,77. D7: <code>=D5+D6</code> = 165,77.'}
]};
