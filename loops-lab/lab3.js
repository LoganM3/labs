//Write a function that loops through an array of numbers and returns the total sum of the array

let arr = [2,3,4]
let sum = 0

for(i = 0; i <= arr.length -1; i++){
        console.log(arr[i])
        sum += arr[i]
    }
    console.log(sum)