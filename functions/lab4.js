// LAB 4 -  The Pluralizer
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let collectiveNoun = 'geese'


function pluralize(noun,number){
if(number == 1){
    return (number + ' ' + noun)
} else if(collectiveNoun){
    return number + ' ' + collectiveNoun
}else{
    return (number + ' ' + noun + 's')
}
}

console.log(pluralize('dog',3))
console.log(pluralize('geese',2))
console.log(pluralize('cat',0))
console.log(pluralize('cat',1))





