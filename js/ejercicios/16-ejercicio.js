function ejercicio16() {
  let texto = prompt("introduzca su texto");
  const arrayTexto = texto.split("");

  const revertirArray = arrayTexto.reverse();

  const unirArray = revertirArray.join(``);
  console.log(unirArray);
}
