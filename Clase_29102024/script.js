//HACER SUMAR, RESTARY MULTIPLICAR DEL 1 AL 5
let array = [];
for (let i = 0; i < 5; i++) {
    array.push(i+1);
    console.log(array[i]);
    }

        let suma = 0;
        for (let i = 0; i < array.length; i++) {
            suma = suma + array[i];
        }

        let resta = array[0];
        for (let i = 1; i < array.length; i++) {
            resta = resta - array[i];
        }

        let multiplicacion = 1;
        for (let i = 0; i < array.length; i++) {
            multiplicacion = multiplicacion * array[i];
        }

console.log("La suma de los 5 digitos es: ", suma);
console.log("La resta de los 5 digitos es: ", resta);
console.log("La multiplicacion de los 5 digitos es: ", multiplicacion);

//TABLA DEL 8
const tablaDel8 = [];

for (let i = 1; i <= 10; i++) {
    tablaDel8.push("8 x " + i + " = " + (8 * i));
}

console.log(tablaDel8);
