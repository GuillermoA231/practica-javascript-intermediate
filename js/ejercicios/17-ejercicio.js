function ejercicio17(){
  /*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado*/
let frase;
let primeraVocal;
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
    primeraVocal = i;
    frase = frase.substring(0,i) + "{" + letra.toUpperCase() + "}" + frase.substring(i+1);
    break;
  }
}
console.log(`la posición de la primera vocal se encuentra en la letra numero ${primeraVocal+1}.\nFRASE: ${frase}.`);
}