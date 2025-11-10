//Conversion explicita

const string ='42'
const int = parseInt(string)
console.log(string)
console.log(int)

const stringDecimal ='3.24'
const float = parseFloat(stringDecimal)

console.log(float)
console.log(stringDecimal)

const binary ='1010'
const integer = parseInt(binary)
console.log(binary)
console.log(typeof integer)

//casting implicito

//string + num
const sum = '5' +3
console.log(sum) //concatena el string

//string + boolean

const SumaBoolString ='3' + true
console.log(SumaBoolString) //concatena el string

//int + bool

const SumIntBool =2+true
console.log(SumIntBool)
