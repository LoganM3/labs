
let x = 7
let y = 5

function greaterNumber(x,y){
    if (x > y){
        return x
    } else {
        return y
    }
}
const results = greaterNumber(x,y)

console.log(`The greater number of ${x} and ${y} is ${results}`)