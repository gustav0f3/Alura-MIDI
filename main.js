function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento  /* != null*/  && elemento.localName === 'audio') { 
            elemento.play();
    }

    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador= 0 COLOCOU DENTRO do for

//enquanto - aplicar um limite da repeticao-verdadeira ou falso
for ( let contador= 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);}

        tecla.onkeydown = function(evento) {
// o operador || add para as duas
            if (evento.code == 'Space' || evento.code == 'Enter') {
                tecla.classList.add('ativa');
            }

            
            
        }

        tecla.onkeyup = function() {
            tecla.classList.remove('ativa');
        }
    

    //contador = contador + 1; por conta do contador++

}

