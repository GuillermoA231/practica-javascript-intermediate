function ejercicio9(){
  let numero = 0;
let contador = 0;

for (let i = 1; i < 501; i++) {
  numero = i;
  switch (true) {
    case contador % 5 == 0 && numero > 1:
      console.log(`--------------------------------------\n`);
    case numero % 4 == 0 && numero % 9 == 0:
      console.log(`${numero} (multiplo de 4 y 9)`);
      break;
    case numero % 4 == 0:
      console.log(`${numero} (multiplo de 4)`);
      break;
    case numero % 9 == 0:
      console.log(`${numero} (multiplo de 9)`);
      break;

    default:
      console.log(`${numero}`);
      break;
  }
  contador++;
}

}