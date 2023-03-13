function ejercicio8(){

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