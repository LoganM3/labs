// LAB 5 - Check if input variable is a number or not
// Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function. Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp.
// Print "Variable is not a number" if isNaN() returns true.
// Else print "Variable is a valid number" if isNaN() returns false.

let x = 'hello'

function isNumber(x){
    if (isNaN(x) == true){
        return 'Variable is not a number'
    } else {
        return 'Variable is a valid number'
    }
}

console.log(isNumber(x))
console.log(isNumber(5))