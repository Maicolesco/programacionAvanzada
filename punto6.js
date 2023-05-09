function hallaredad(edades)
{
    var edadMenor =100
    var edadMayor=0
    edades.forEach(function(edad){        
        if(edad<edadMenor) edadMenor=edad
        if(edad>edadMayor) edadMayor=edad
    })

    console.log(edades)
    console.log("La edad mayor es " + edadMayor)
    console.log("La edad menor es " + edadMenor)
}

var edades=[]

for(var i=0;i<20;i++){
    var edadAleatoria= Math.random()*100
    edades.push(edadAleatoria)
}

arregloEdades=hallaredad(edades)

