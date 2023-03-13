function ejercicio6(){
    /*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

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
}