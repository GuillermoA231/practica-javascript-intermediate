function ejercicio4() {
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