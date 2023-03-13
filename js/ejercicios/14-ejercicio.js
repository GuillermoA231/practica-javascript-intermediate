function ejercicio14(){
    /*14- Realiza un script que pida una cadena de texto
y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let texto = prompt("introduce tu texto");
let textoConcatenado = "";
for (let i = 0; i < texto.length; i++) {
    textoConcatenado += texto[i] + "-";
    
}
textoConcatenado = textoConcatenado.slice(0,textoConcatenado.length-1);
console.log(textoConcatenado);
}