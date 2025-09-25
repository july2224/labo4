// 1. Dado un array de números enteros positivos desordenados, devolver otro array con los números ordenados
function ordenar(arr) {
    const nuevoArray = [...arr]; // Copia del array original
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                // Intercambiar valores
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

const arrayOriginal = [14, 23, 99, 874, 93, 12];
console.log(ordenar(arrayOriginal));
document.getElementById('arrayOrdenado').textContent = ordenar(arrayOriginal).join(', ');

// 2. Función que recibe un número entero positivo y devuelve true si es par o false en caso contrario
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7));
document.getElementById('numeroPar').textContent = esPar(7);

// 3. Cada día una planta crece según su velocidadCrecimiento y decrece según velocidadDecrecimiento
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento; // Crece durante el día
        dias++;
        if (altura >= alturaDeseada) {
            return dias; // Si alcanza la altura deseada, termina
        }
        altura -= velocidadDecrecimiento; // Decrece durante la noche
    }

    return dias;
}

console.log(calcularDiasCrecimiento(2, 1, 5));
document.getElementById('diasPlanta').textContent = calcularDiasCrecimiento(2, 1, 5);
