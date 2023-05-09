

var alimentos = []
var prueba

for (let i = 0; i < 10; i++) {    
    let numeroTipo= Math.random() * (2 - 1) + 1; 
    if(numeroTipo<1.5) tipo="vegetal"
    else if(numeroTipo>1.6) tipo="animal"
    else tipo="insecto"
    let numeroNivel = Math.random()*1000

    console.log(i+" "+ tipo +" "+numeroNivel)

    function llenaralimentos(nombre,tipo,nivel,clasificarDieta){
        setTimeout(function(){
            let alimento =  {
                nombre : nombre,
                tipo: tipo,
                nivel : nivel
            }
           clasificarDieta(alimento)
        },1000)  
        
    }

    llenaralimentos(i,tipo,numeroNivel,function(alimento){        
            alimentos.push(alimento)             
    })     
}

console.log(prueba)









