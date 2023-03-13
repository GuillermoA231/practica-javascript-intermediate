/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
let sumaNum = 0;
let num;

do {
  num = prompt("Ingrese un numero:");
  if (num !== null) {
    if (typeof num === typeof NaN) {
      alert("No es un número válido. Intente de nuevo.");
    } else {
        num = parseInt(num);
        sumaNum = sumaNum + num;
    }
  }
} while (isNaN(num) || num !== null);

alert("La suma de los números es: " + sumaNum);
