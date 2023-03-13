function ejercicio7() {
  let limite;
  let contador = 0;
  do {
    limite = prompt("ingrese un numero inferior a 50");
  } while (isNaN(limite) && limite <= 50);

  for (let i = 1; i <= limite; i++) {
    let resultado = "";
    contador += 1;
    for (let j = 0; j < i; j++) {
      resultado += contador;
    }
    console.log(resultado);
  }
  for (let i = limite; i >= 1; i--) {
    let resultado = "";
    contador += 1;
    for (let j = 0; j < i; j++) {
      resultado += contador;
    }
    console.log(resultado);
  }
}
