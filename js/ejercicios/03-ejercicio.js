function ejercicio3(){
  /* 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let texto = "";
let continuar = true;

do {
  let cadena = prompt("Introduce una cadena de texto:");

  if (cadena === null) {
    continuar = false;
  } else {
    texto += cadena + "-";
  }
} while (continuar);

if (confirm("¿Deseas concatenar todas las cadenas con un guión?")) {
  if (texto.length > 0) {
    texto = texto.slice(0, -1); // Eliminar el último guión
    alert(texto);
  } else {
    alert("No se han introducido cadenas de texto.");
  }
}

}