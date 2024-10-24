//Arreglos
/*
let array = ["dato1",1,Boolean];
console.log("tamaño array: "+ array.length)
array.push("Inserto nuevo valor");
console.log(array[3]);
console.log("tamaño del nuevo array: "+ array.length)

console.log(array[3]);
*/
//Una iteracion
/*
5*1
5*2
5*3
5*4
5*5..

FIN DEL ARREGLO VALOR DE LA POSICION 
*/
let array = [];
for (let j = 0; j < 10; j++){

    array.push(j+1);
    
}

for (let i = 0; i < array.length; i++) {
    let resultado = 5*(i+1);
   console.log(array[i]+"*5 = "+resultado);

    }

    console.log("FIN DEL ARREGLO VALOR DE LA POSICION "+array.length  )