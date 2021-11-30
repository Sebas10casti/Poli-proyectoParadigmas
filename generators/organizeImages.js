let information;

document.addEventListener("DOMContentLoaded", function(){
    getData('data.json')
    .then(response => response.json())
    .then(data => createContent(data));
});

/**
 * Funcion padre que creara el contenido de la pagina
 * @param {object} data 
 */
const createContent= (data) =>{
    information = data;
    let content = '';
    //Declare Elements DOM
    const
        header = document.getElementById('header'),
        container = document.getElementById('wrapper')

    //Color de fondo
    document.body.style.background = data.background;
    //crear Header
    header.innerHTML = generateHeader(data);
    //create description
    content += generateDescription(data);
    //crear las imagenes
    content += generateOrganizeImages(data);
    content += generateOrganizeText(data);
    //Generar modales
    content += generateModalAnswerCorrect(data.nextLevel)
    content += generateModalAnswerIncorrect(data.nextLevel)
    content += generateOrganizeButtons(data);
    //Imprimir todo el contenido en el DOM
    container.innerHTML = content;
    //Inicializar sortable
    Sortable.create(document.getElementById('images-list'));
}

/**
 * valida los resultados y envia al siguiente nivel si todo esta ok
 */

const validateDragImagesResults = () => {
    let
        contentImages = '',
        contentText = '';

    const
        orderImages = document.getElementById('images-list').querySelectorAll('li'),
        orderCards = document.getElementById('text-list').querySelectorAll('li'),
        validateButton = document.getElementById('validateButton'),
        nextButton = document.getElementById('nextButton')

    for (let i = 0; i < orderImages.length; i++) {
        contentImages += orderImages[i].getAttribute('data-text');
    }
    for (let i = 0; i < orderCards.length; i++) {
        contentText += orderCards[i].getAttribute('data-text');
    }

    if(contentImages.toLocaleLowerCase() == contentText.toLocaleLowerCase()){
        openModal('modal-correct')
        validateButton.style.display = 'none';
        nextButton.style.display = "block";

    }else{
        container = document.getElementById('wrapper')
        openModal('modal-incorrect')
        setLives(getLives()-1)
        if(getLives() <= 0){
            window.location.href = "../index.html";
        }
        document.getElementById("header").remove()
        container.insertAdjacentHTML('beforebegin', generateHeader(information));
    }
}


