/* Entrada 7 (opcional): funciones de texto. En s van MÁS PISTAS, no la solución. */
(()=>{
const A=[['Nombre','Apellido'],['Ana','García']];
const CC=/CONCAT\(|CONCATENAR\(/;
(window.ENTRADAS=window.ENTRADAS||[])[6]={titulo:'Texto (opcional)',opcional:true,ejercicios:[
{d:'En Excel el texto también se maneja con funciones. La función <b>CONCAT</b> une textos o celdas en uno solo: <code>=CONCAT(celda1; celda2)</code>. Une el nombre (A2) y el apellido (B2) en la celda amarilla.',
 rows:A,g:{C2:['AnaGarcía',CC]},h:'Escribe CONCAT con las dos celdas separadas por punto y coma. Excel las pega tal cual, sin espacio entre ellas. Debe salir AnaGarcía.',
 s:'Los dos argumentos son referencias a celdas: la del nombre y la del apellido, en ese orden. No hace falta escribir comillas.'},
{d:'Un texto escrito entre comillas también puede ser un argumento de CONCAT, por ejemplo un espacio: <code>" "</code>. Usa CONCAT para que salga el nombre completo con un espacio en medio: Ana García.',
 rows:A,g:{C2:['Ana García',CC]},h:'Ahora CONCAT lleva tres argumentos: el nombre, un espacio entre comillas y el apellido.',
 s:'El orden de los argumentos es el orden en que aparecerán en el resultado: celda, texto entre comillas, celda.'},
{d:'Puedes mezclar texto escrito por ti con celdas. Usa CONCAT para crear un saludo con este aspecto: Hola, Ana! (con la coma, el espacio y el signo de exclamación). El nombre debe salir de la celda A2, no escrito a mano.',
 rows:A,g:{C2:['Hola, Ana!',CC]},h:'Piensa en tres trozos: un texto fijo, una celda y otro texto fijo. Los textos fijos van entre comillas.',
 s:'El primer trozo termina con la coma y el espacio, y el último trozo es solo el signo de exclamación. Revisa que no te falte ninguna comilla.'},
{d:'Hay otra forma de unir textos: el operador <code>&amp;</code>, que funciona como un pegamento entre dos cosas (por ejemplo <code>=A2&amp;B2</code>). Haz que salga el nombre completo (Ana García) usando solo &amp;, sin la función CONCAT.',
 rows:A,g:{C2:['Ana García',/&/]},h:'Entre cada dos trozos va un &amp;. Necesitas pegar tres cosas: la celda del nombre, un espacio entre comillas y la celda del apellido.',
 s:'La fórmula tiene dos símbolos &amp;: uno entre el nombre y el espacio, y otro entre el espacio y el apellido.'},
{d:'La función <b>MAYUSC</b> convierte un texto a mayúsculas: <code>=MAYUSC(celda)</code>. Escribe el apellido de la celda B2 en mayúsculas.',
 rows:A,g:{C2:['GARCÍA',/MAYUSC\(|UPPER\(/]},h:'Escribe MAYUSC con la celda del apellido dentro del paréntesis. Solo lleva un argumento.',
 s:'Dentro del paréntesis va únicamente la referencia a la celda del apellido, sin comillas.'},
{d:'La función <b>MINUSC</b> hace lo contrario: convierte un texto a minúsculas. Escribe el nombre de la celda A2 en minúsculas.',
 rows:A,g:{C2:['ana',/MINUSC\(|LOWER\(/]},h:'Es igual que el ejercicio anterior, cambiando la función y la celda.',
 s:'MINUSC con un solo argumento: la celda del nombre.'},
{d:'La función <b>LARGO</b> cuenta cuántos caracteres tiene un texto: <code>=LARGO(celda)</code>. Calcula cuántas letras tiene el apellido de la celda B2.',
 rows:A,g:{C2:[6,/LARGO\(|LEN\(/]},h:'LARGO solo necesita la celda del apellido. Cuenta las letras para comprobar tu resultado. Debe dar 6.',
 s:'García tiene seis letras (la í cuenta como una). Escribe LARGO con la celda B2 dentro.'},
{d:'La función <b>IZQUIERDA</b> coge las primeras letras de un texto: <code>=IZQUIERDA(celda; cuántas letras)</code>. Obtén solo la primera letra del nombre de la celda A2.',
 rows:A,g:{C2:['A',/IZQUIERDA\(|LEFT\(/]},h:'IZQUIERDA lleva dos argumentos: la celda y un número que dice cuántas letras quieres coger desde el principio.',
 s:'Como solo quieres una letra, el número es el más pequeño que tiene sentido aquí.'},
{d:'La función <b>DERECHA</b> hace lo mismo pero empezando por el final del texto: <code>=DERECHA(celda; cuántas letras)</code>. Obtén las últimas tres letras del apellido de la celda B2.',
 rows:A,g:{C2:['cía',/DERECHA\(|RIGHT\(/]},h:'Dos argumentos: la celda del apellido y el número de letras que quieres coger del final. Debe salir cía.',
 s:'El número de letras es el mismo que pide el enunciado: tres.'},
{d:'Reto: crea un nombre de usuario con la primera letra del nombre seguida del apellido, todo en minúsculas (por ejemplo: agarcía). Tendrás que combinar varias funciones, una dentro de otra.',
 rows:A,g:{C2:['agarcía',/(MINUSC|LOWER)\(.*(IZQUIERDA|LEFT)\(/]},h:'Ve de dentro hacia fuera: primero saca la primera letra del nombre, después únela con el apellido y, por último, pasa todo a minúsculas.',
 s:'La función de fuera es MINUSC. Dentro lleva un CONCAT (o un &amp;) con dos partes: una IZQUIERDA con la celda del nombre, y la celda del apellido.'}
]};})();
