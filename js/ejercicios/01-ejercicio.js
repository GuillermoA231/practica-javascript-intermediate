function ejercicio1(){
  let edad;
  do {
    edad = prompt("Ingrese su edad");
  } while (isNaN(edad) || edad < 0);

  if (edad > 18) {
    alert("Ya puede conducir");
  } else {
    alert("No puede conducir");
  }
}