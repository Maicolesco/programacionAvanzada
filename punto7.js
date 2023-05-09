let buscarCantidadPositivos = (numeros) =>{
    let contador=0
    numeros.forEach(function(numero){
        if(numero>0) contador=contador+1
    })
    return contador
}
let buscarCantidadNegativos = (numeros) =>{
    let contador=0
    numeros.forEach(function(numero){
        if(numero<0) contador=contador+1
    })
    return contador
}

let hallarValorAbsoluto= (numeros) =>{
    let absolutos=[]
    numeros.forEach(function(numero){
        if(numero<0){
            absolutos.push(Math.abs(numero))
        }
    })
    return absolutos
}

let buscarMasCercano=(numeros)=>{
    let cercano=100000    
    numeros.forEach(function(numero){        
        menor=Math.abs(numero)
        if(cercano >menor){
            cercano=menor
        }        
    })
    return cercano
}

let numeros=[10,4,7,-8,9,-7,3,-21,4,-0.5,9]

positivos=buscarCantidadPositivos(numeros)
negativos=buscarCantidadNegativos(numeros)
absolutos=hallarValorAbsoluto(numeros)
cercano= buscarMasCercano(numeros)

let buscarNumerosPositivos = numeros.filter(function(numero){
        return(numero>=0)
    })   
let buscarNumerosNegativos = numeros.filter(function(numero){
        return(numero<0)
    })   


console.log("hay "+ positivos +" numeros positivos y son: " + buscarNumerosPositivos)
console.log("hay "+ negativos +" numeros Negativos y son: " + buscarNumerosNegativos + " y sus valores absolutos son: " + absolutos)
console.log("El numero mas cercano a cero es: "+ cercano)

