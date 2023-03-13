function ejercicio16(){
    /*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("introduzca su texto");
const arrayTexto = texto.split("");

const revertirArray = arrayTexto.reverse();

const unirArray =revertirArray.join(``);
console.log(unirArray);
}