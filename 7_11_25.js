//1. tipos de datos
const entero =10

const decimal = 10.5
console.log(typeof entero, typeof decimal)

//notacion cientifica
const cientifico = 5e10

//Infinitos y NaN

const infinito = Infinity
const NaN = null

//Operaciones

const suma =entero + decimal
const resta = decimal- entero
const mult = 7*5
const division = 25/5

//Operaciones compuestas


const potencia = 2**4
const modulo = 7%2

//Precisión
const resultado= 0.1+ 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado===0.3)

//op avanzadas
const raiz = Math.sqrt(36)
const absoluto = Math.abs(resta)
const aleatorio = 100*Math.random().toFixed(2)
console.log(raiz)
console.log(absoluto)
console.log(aleatorio)
