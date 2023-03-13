function ejercicio8(){
  /*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let num = parseInt(
  prompt("Introduce un número para el límite de la pirámide:")
);

while (num === null || isNaN(num)) {
  num = prompt("Ingrese su numero");
  num = parseInt(num);
}

let piramide = "";
let contador = 1;
for (let i = 0; i <= num; i++) {
  contador = 1;
  for (let j = 1; j <= i; j++) {
    piramide += contador;
    contador++;
  }
  piramide += "\n";
}

// Imprime la pirámide
console.log(piramide);

}