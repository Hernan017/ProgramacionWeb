//Definicion de una funcion
/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');

}

//Llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/
/*
function hello(){
    return('Hola clase');
}
const result = hello()
console.log(result);
*/

//Funcion que retorna otra funcion
/*
function hello(){
    return function(){
        return 'hola soy la funcion dos'
    }
}

console.log(hello()())
*/
/*
function add(x){

    console.log(x);

}

add(6);
*/

//Multiples parametros
/*
function add(x,y){
    
    console.log(x+y);
}

add(5,undefined)
*/


//control de multiples parametros
/*
function add(x,y=0){
    
    if (y===undefined) {
        y=0;
    }
    console.log(x+y);
}

add(5,undefined)
*/

//parametro de tipo cadena
/*
function add(name){
    console.log('Hola ' + name);
}

add("Angulo osea yo :D")
*/

//Objetos
const user = {
    nombre: 'Hernan',
    apellidoP:'Angulo',
    apellidoM:'Cayetano',
    edad:123456789,
    direccion:{
        calle: 'Capibara',
        no:2345,
        colonia:'Yo w',
        delegacion:'IztapaYork'
    },
    amigos:['Eze, Yo mismo'],
    active:true
}

//En consola nombre apelidoP, apellidoM
//alert si es activo
//en consola edad
//alerta calle no colonia delegacion
//en consola amigos
function traer(){
    console.log(user.nombre + ' ' + user.apellidoP + ' ' +  user.apellidoM)
    console.log(user.edad);
    console.log(user.amigos);

}
traer()

alert('Activisimo :D'+ ' ' + user.direccion.calle + ' ' + user.direccion.no + ' ' + user.direccion.colonia + ' ' + user.direccion.delegacion);