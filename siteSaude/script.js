// SEM SWITCH CASE

// function aparecerTexto(){
    
//     document.querySelector(".resultado").style.display = "block"
//     document.querySelector(".resultado2").style.display = "none"
//     document.querySelector(".resultado3").style.display = "none"
//     document.querySelector(".resultado4").style.display = "none"

// }

// function aparecerTexto2(){

//     document.querySelector(".resultado").style.display = "none"
//     document.querySelector(".resultado2").style.display = "block"
//     document.querySelector(".resultado3").style.display = "none"
//     document.querySelector(".resultado4").style.display = "none"
// }

// function aparecerTexto3(){

//     document.querySelector(".resultado").style.display = "none"
//     document.querySelector(".resultado2").style.display = "none"
//     document.querySelector(".resultado3").style.display = "block"
//     document.querySelector(".resultado4").style.display = "none"
// }

// function aparecerTexto4(){

//     document.querySelector(".resultado").style.display = "none"
//     document.querySelector(".resultado2").style.display = "none"
//     document.querySelector(".resultado3").style.display = "none"
//     document.querySelector(".resultado4").style.display = "block"
// }

// COM SWITCH CASE

function aparecerTexto(qualBotao){

    switch(qualBotao){
        case 1: {
            let div = document.getElementById("texto");
            div.classList.remove("kauan");
            div.classList.add("kuan");
            document.getElementById("texto").innerHTML = "não saia de casa";
            break;
        }
        case 2:{
            let div = document.getElementById("texto");
            div.classList.remove("kauan");
            div.classList.add("kuan");
            document.getElementById("texto").innerHTML = "sai de casa mas se proteja";
            break;
        }
        case 3: {
            let div = document.getElementById("texto");
            div.classList.remove("kauan");
            div.classList.add("kuan");
            document.getElementById("texto").innerHTML = "se alimente melhor";
            break;
        }
        case 4:{
            let div = document.getElementById("texto");
            div.classList.remove("kauan");
            div.classList.add("kuan");
            document.getElementById("texto").innerHTML = "se cuide";
            break;
        }
    }
}