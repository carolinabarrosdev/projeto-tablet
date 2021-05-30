const imagemBloqueada = document.getElementById("imagemBloqueada");
const imagemDesbloqueada = document.getElementById("imagemDesbloqueada");
const telaBloqueada= document.getElementById("telaBloqueada")
const telaDesbloqueada= document.getElementById("telaDesbloqueada")

//desabilitar botao no inicio e texto de status
document.getElementById("botaoBloquear").disabled = true;
telaBloqueada.style.display="none";
telaDesbloqueada.style.display= "none";

//lista de eventos

document.getElementById("botaoDesbloquear").addEventListener("click", function () {
    imagemBloqueada.setAttribute("class", "esconder"); imagemDesbloqueada.setAttribute("class", "mostrar");
    document.getElementById("botaoBloquear").disabled = false; document.getElementById("botaoDesbloquear").disabled = true;
    document.getElementById("telaBloqueada").style.display= "none";
    telaDesbloqueada.style.display= "inline";

});

document.getElementById("botaoBloquear").addEventListener("click", function () { imagemBloqueada.setAttribute("class", "mostrar"); imagemDesbloqueada.setAttribute("class", "esconder"); document.getElementById("botaoDesbloquear").disabled = false; 
telaDesbloqueada.style.display="none";
document.getElementById("telaBloqueada").style.display= "inline";});







