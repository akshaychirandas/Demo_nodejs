// console.log(__dirname);


// setInterval(() => {
//     console.log('Hello world')
// },10)
const names = require('./4-names')
const sayHi = require('./5-utils')


console.log(names)

sayHi(names.john)
sayHi(names.peter)