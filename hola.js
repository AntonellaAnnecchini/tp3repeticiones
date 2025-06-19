
 //Ejercicio 1
let animales = ["perro", "gato", "conejo", "loro"];
console.log();
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}

// Ejercicio 2
console.log();
for (let i = 0; i < animales.length; i += 2) {
  console.log(animales[i]);
}

// Ejercicio 3
let numeros = [4, 7, 2, 9, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma es", suma);

// Ejercicio 4
let datos = [3, 6, 1, 8];
let datosMultiplicados = [];
for (let i = 0; i < datos.length; i++) {
  datosMultiplicados.push(datos[i] * 2);
}
console.log(datosMultiplicados);

// Ejercicio 5
let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombreBuscado = prompt("Ingresá un nombre:");
if (alumnos.includes(nombreBuscado)) {
  console.log({nombreBuscado});
} else {
  console.log({nombreBuscado});
}

// Ejercicio 6
let valores = [5, 0, 8, 0, 2];
for (let i = 0; i < valores.length; i++) {
  if (valores[i] === 0) {
    valores[i] = 100;
  }
}
console.log(valores);

//Ejercicio 7
let notas = [8, 7, 9, 10, 6];
let total = 0;
for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}
let promedio = total / notas.length;
console.log(promedio);
