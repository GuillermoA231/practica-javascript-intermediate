/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: si ingresamos el DNI 40773821, la salida debería ser ‘L’
*/
const letrasDni = 'TRWAGMYFPDXBNJZSQVHLCKE';
let letrasIndex = 0;
let resultado = '';
let dni = prompt("Introducir número DNI sin puntos y entre entre 0 y 99999999: ")
let numDni = parseInt(dni);
console.log(numDni);
while (numDni === null || isNaN(numDni) || numDni < 0 || numDni > 99999999) {
    alert("Valor incorrecto! introduce un numero entre 0 y 99999999")
    dni = prompt("INTODUCE EL NUMERO DNI SIN PUNTOS Y MAYOR A 0 Y MENOR A 99999999");
    numDni = parseInt(dni);
}
letrasIndex = numDni % 23;
resultado = letrasDni[letrasIndex];

alert(resultado);
console.log(resultado);