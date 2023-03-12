/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */
let limite;
let contador = 0;
do {
    limite = prompt("ingrese un numero inferior a 50");
} while (isNaN(limite) && limite <= 50);

for (let i = 1; i <= limite; i++) {
  let resultado = '';
  contador += 1;
    for (let j = 0; j < i; j++) {
            resultado += contador;
    }
  console.log(resultado);
}
for (let i = limite; i >= 1; i--) {
  let resultado = '';
  contador += 1;
  for (let j = 0; j < i; j++) {
    resultado += contador;
  }
  console.log(resultado);
}