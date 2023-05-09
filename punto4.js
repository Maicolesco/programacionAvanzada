let calcularSablesDefectuosos = (numeros) => {
    let sablesDefectuosos=0
    numeros.forEach(function(numero){
        if(numero<0){
            sablesDefectuosos=sablesDefectuosos+1
        }
    })
    return sablesDefectuosos
}

let numeros =[1,2,3,-4,-5,-6,7,-8,-9]
let sablesDefectuosos = calcularSablesDefectuosos(numeros)
console.log(`La cantidad de sables defectuosos con energia negativa son ${sablesDefectuosos}`)