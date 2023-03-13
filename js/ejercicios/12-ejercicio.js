function ejercicio12() {
  /**12- Realiza un script que genere un número aleatorio entre 1 y 99 */
  function obtenerIntAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const MIN = 1;
  const MAX = 99;
  let numero;

  numero = obtenerIntAleatorio(MIN, MAX);
  console.log(numero);
}
