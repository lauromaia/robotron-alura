const listaControles = document.querySelectorAll("[data-controle]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatistica");

listaControles.forEach((botao) =>{
    botao.addEventListener("click", (evento) => {
        manipulaDados(evento.target.parentNode, evento.target.dataset.controle);
        manipulaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle);
    })
});

function manipulaDados(elemento, operacao){
    const peca = elemento.querySelector("[data-contador]");
    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    }
    else{
        peca.value = parseInt(peca.value) - 1;
    }
}

function manipulaEstatistica(peca, operacao){
    if(operacao === '+'){  
        estatisticas.forEach((elemento) =>{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        });
    }
    else{
        estatisticas.forEach((elemento) =>{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        });
    }
}
