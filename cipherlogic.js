



var entrada= document.getElementById("textin")
var code = document.getElementById ("one")
var decode = document.getElementById ("another")
var cza = document.getElementById("b64")
var btn= document.getElementById ("go")
var selecionar= document.getElementById("escolha")
var saida = document.getElementById("textout")

// Display None

selecionar.addEventListener('change', function (e) {
    var opcao = selecionar.value
    var option = document.getElementById("incremento")

    if (opcao==="2") {

        option.classList.add("sumir")
       
    }

    else if ( opcao==="1") {
        option.classList.remove("sumir")
    
    }
})

// Texto Botão

code.addEventListener ("click", function(){
    btn.textContent = "Codificar"
})

decode.addEventListener("click", function(){
    btn.textContent = "Decodificar"
})

// Codificar e Decodificar

btn.addEventListener("click", function(){
    var opcao = selecionar.value;
var option = +document.getElementById('soma').value
if (opcao==="2" && btn.textContent=="Codificar") {
    saida.value = btoa(entrada.value)
}

else if (opcao ==="2" && btn.textContent =="Decodificar") {
    saida.value = atob(entrada.value)
}

else if (opcao ==="1" && btn.textContent =="Codificar") { 
    
    saida.value = cesar(entrada.value, option)
}

else if (opcao ===  "1" && btn.textContent =="Decodificar"){
    saida.value= deCesar(entrada.value, option.value)
} 
    
})

// Criptografia de Cesar

function cesar (texto, soma) {
    texto.split('')
    var adcionar = Number(soma)
    var cripto = []
    var local = []


    for (var i=0; i<texto.length; i++) {

        if (texto.charCodeAt(i) === 32) {
            local.push((texto.charCodeAt(i)))
        }

        else if(texto.charCodeAt(i)>= 65 && texto.charCodeAt(i)<= 90)  {
            local.push((((texto.charCodeAt(i) - 65) + adcionar) % 26) + 65)
        }

        else if(texto.charCodeAt(i)>= 97 && texto.charCodeAt(i)<= 122){
            local.push((((texto.charCodeAt(i) - 97) + adcionar) % 26) + 97)
        }

        else {
            local.push((texto.charCodeAt(i)))
    }

    }

    for( var j=0; j<local.length; j++){
        cripto.push(String.fromCharCode(local[j]))
    }

    return cripto.join (" ")
}

function deCesar(texto1, soma1) {
    texto1.split('')
    var adcionar2 = Number(soma1)
    var cripto2 = []
    var local2 = []

    for (var k=0; k < texto1.length; k++) {
        
        if (texto1.charCodeAt(k) === 32) {
            local2.push((texto1.charCodeAt(k)))
        } 

        else if (texto1.charCodeAt(k)>= 65 && texto1.charCodeAt(k)<= 90) {
            local2.push((((texto1.charCodeAt(k) - 65) - adcionar2) % 26) + 65)
        } 

        else if (texto1.charCodeAt(k)>= 97 && texto1.charCodeAt(k)<= 122){
            local2.push((((texto1.charCodeAt(k) - 97) - adcionar2) % 26) + 97)
        }

        else {
            local2.push((texto1.charCodeAt(k)))
        }
    
    }

    for (var l = 0; local2.length > l; l++) {
        cripto2.push(String.fromCharCode(local2[l]))
    }
    return cripto2.join('')

}



