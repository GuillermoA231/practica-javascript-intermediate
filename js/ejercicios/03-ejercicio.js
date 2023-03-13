function ejercicio3(){
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