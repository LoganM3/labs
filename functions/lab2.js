function helloWorld(lang){
if(lang == 'span'){
    return 'holaWorld'
} else if (lang == 'fr'){
    return 'le world'
} else if (lang == 'germ'){
    return 'HELLOWORLD'
} else{
    return 'helloWorld'
}

    // switch(lang){
    //     case 'span';
    //     return 'holaWorld'
    //     break;
    // }
}

// let germ = helloWorld('germ')
// console.log(germ)

// let port =helloWorld('port')
// console.log(port)

console.log(helloWorld('fr'))
console.log(helloWorld('eng'))