function tocarSomPom(){
    document.querySelector('#som_tecla_pom').play(); // Como é um áudio, precisa chamar a função play para ser tocado
}

//document.querySelector('.tecla_pom').onclick = tocarSomPom; // Não usar () porque está apenas atribuindo

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocarSomPom;