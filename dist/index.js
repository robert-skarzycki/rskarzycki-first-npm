const format = require('format')

exports.myFunc = function () {
    console.log('Hejka, i.e. hello world!')
}

exports.myFunc2 = function () {
    const msg = format.printf("%s world", 'hellooo')
    console.log(msg)
}