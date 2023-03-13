function ejercicio4() {
  /*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
  let sumaNum = 0;
  let num;
  let booleano = true;
  while (booleano) {
    num = prompt("Introduce un número:");
    switch (true) {
      case num === null:
        alert("La suma de los números es: " + sumaNum);
        booleano = false;
        break;
      case isNaN(num):
        alert("Intente de nuevo, no es un número valido.");
        break;
      default:
        sumaNum += parseInt(num);
    }
  }
}
