function ejercicio14() {
  let texto = prompt("introduce tu texto");
  let textoConcatenado = "";
  for (let i = 0; i < texto.length; i++) {
    textoConcatenado += texto[i] + "-";
  }
  textoConcatenado = textoConcatenado.slice(0, textoConcatenado.length - 1);
  console.log(textoConcatenado);
}
