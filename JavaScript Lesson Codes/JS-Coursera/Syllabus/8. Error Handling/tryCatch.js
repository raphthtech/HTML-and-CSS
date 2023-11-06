console.log(a + b)
console.log('This line is never reached')

//throw new ReferenceError()

try {
    console.log(a+b)
} catch(err){
    console.log('there was an error')
    console.log('another error detected')
}

console.log()