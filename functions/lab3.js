function assignedGrade(x){
if(x <= 100 && x >= 90){
    return 'A'
} else if(x <= 89 && x >= 80){
    return 'B'
}else if(x <= 79 && x >= 70){
    return 'C'
}else if(x <= 69 && x >= 60){
    return 'D'
}else if(x <= 59 && x >= 00){
    return 'F'
} else {
    return 'whats your grade?'
}
}



console.log(assignedGrade(10))