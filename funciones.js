//Funciones normales

const a = 5
const b= 8
const rnd = Math.floor(10*Math.random())
function sum(a,b){
    return a+b
}

function resta(a,b){
    return a-b
}

function sqrt (n,pw){
    return n**pw
}

console.log(sqrt(sum(resta(b,a),rnd),2)) //Resta b-a, le suma un random de 1-9 y lo eleva a la 2

//funciones puras

/*
    Una función pura es una función que:
    1. Siempre produce el mismo resultado dado el mismo conjunto de argumentos.
    2. No tiene efectos secundarios, es decir, no modifica ninguna variable externa, ni depende de variables externas que puedan cambiar.
*/

//Efectos secundarios que hacen impura una función

/*
    1. Modificar variables globales
    2. Modificar parámetros
    3. Soliticudes HTTP
    4. Imprimir mensajes en pantalla o consola
    5. Manipulación del DOM
    6. Obtener la hora actual
*/

//Ejemplo
function summa (a,b){
    return a+b
}

function square(x){
    return x*x
}

function addTen (y){
    return y+10
}

const number =5
const finalResult = addTen(square(number)) //combinacion de dos funciones puras, sigue siendo pura
console.log(finalResult)



//Ejemplos de impuras
function summ (a,b){
    console.log('A: ',a)
    return a+b
}

let total = 0

function SumWithSideEffect(a){
    total += a
    return total
}


//---------------------------------------
//ArrowFunctions

const greeting = function(name){ //old
    return `Hi, ${name}`
}

const newGreeting = (name)=>{ //arrow function
    return `Hi, ${name}`
}


//Arrow Function - implicit return
const newGreetingImplicit = name =>`Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name,lastname) =>`Hi, I'm ${name} ${lastname}`

//Lexical Binding

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTradicionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message)=>{
        console.log(`${fictionalCharacter.name} says: ${message}`) //El this. es global en estas funciones, como name se declaró local, no lo reconoce.
    }
}

fictionalCharacter.messageWithTradicionalFunction('With great power, comes great responsability')
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus. ')