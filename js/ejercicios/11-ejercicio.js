function ejercicio11(){
  let nombreYApellido = [];
for (let i = 0; i < 3; i++) {
  let nombre = prompt(`Ingresa el nombre ${i + 1}:`);
  let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`));
  nombreYApellido.push({ nombre, edad });
}
let edades = nombreYApellido.map(persona =>persona.edad);
let edadMasAlta = Math.max(...edades);
let personaMasVieja = nombreYApellido.find(persona => persona.edad == edadMasAlta);
console.log(personaMasVieja);
}