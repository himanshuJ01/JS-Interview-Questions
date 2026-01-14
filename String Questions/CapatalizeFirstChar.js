function Captalize(str){
    return str.split(' ').map((char)=> char[0].toUpperCase()+ char.slice(1)).join(' ');
}

console.log(Captalize("hello everyone!"))