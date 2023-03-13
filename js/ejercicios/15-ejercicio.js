function ejercicio15() {
  let frase;
  let vocales = "";
  do {
    frase = prompt("Introduce una frase:");
    frase = frase.trim();
  } while (
    frase === null ||
    frase === "" ||
    frase.trim() === "" ||
    !isNaN(frase)
  );

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.substring(i, i + 1);
    if ("AEIOUaeiouÁÉÍÓÚáéíóúÜü".indexOf(letra) !== -1) {
      vocales += letra;
    }
  }
  console.log(vocales.length);
}
