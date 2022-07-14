// LAB 6 - Find the largest of two number
// Function `findLargest()` finds the largest between two number by using ">" and "=" operator in JavaScript.
// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

let num1 = 2
let num2 = 9

function findLargest(num1,num2){
     return num1 > num2 ? 'num1 is the largest' :
     num2 > num1 ?  'num2 is the largest': 'num1 is equal to num2'
}
   
console.log(findLargest(num1,num2))
console.log(findLargest(3,3))
console.log(findLargest(8,2))



// function findLargest(num1,num2){
// switch(num1,num2){
//     case num1 > num2:
//         console.log('num1 is the largest number')
//         break;
//     case num2 > num1:
//         console.log('num2 is the largest number')
//         break;
//     case num1 == num2:
//         console.log('num1 and num2 are equal')
//         break;
// }
// }

// findLargest(num1,num2)

