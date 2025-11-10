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



