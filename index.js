function distancia (x1,x2,y1,y2){      
    let distancia=Math.sqrt(Math.pow( (x2-x1),2)+Math.pow( (y2-y1),2)).toFixed(2)
    return distancia
}

let distanciaPlaneta = distancia(1,3,2,4)

console.log("La distancia es "+ distanciaPlaneta)