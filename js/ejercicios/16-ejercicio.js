/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("introduzca su texto");
const arrayTexto = texto.split("");
console.log(arrayTexto);

const revertirArray = arrayTexto.reverse();
console.log(revertirArray);

const unirArray =revertirArray.join(``);
console.log(unirArray);