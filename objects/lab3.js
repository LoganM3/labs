// Lab 3 - Object

// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.

// let TeacherAssistant = {
//     name: 'Logan',
//     inClass: true,
// }

let TeacherAssistants = []

let TeacherAssistant = {
    name: 'logan',
    inClass: false,
}
TeacherAssistants.push(TeacherAssistant)
console.log(TeacherAssistants[0].name)

let TeacherAssistant2 = {
    name: 'manny',
    inClass: true,
}

TeacherAssistants.push(TeacherAssistant2)
console.log(TeacherAssistants[1].name)
// console.log(TeacherAssistant)

// TeacherAssistant.Classes = []
// TeacherAssistant.Classes.push('just string')



// console.log(TeacherAssistant)