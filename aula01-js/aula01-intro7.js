let triploV3 = num => num*3
console.log(triploV3(7))

const rest = (...numeros)=>{
    let aux = 0
    for(i in numeros){
        aux+=i;
    }
    return aux
}

console.log("REST:" , rest(4,3))