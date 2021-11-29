document.addEventListener("DOMContentLoaded", function(){
    getData('data.json')
    .then(response => response.json())
    .then(data => createContent(data));
});

let information;
const createContent= (data) =>{
    information = data;
    //Declare Elements DOM
    const
    header = document.getElementById('header'),
    container = document.getElementById('wrapper')
    
    let content = '';
    //color de fondo
    document.body.style.background = data.background;
    //crear Header
    header.innerHTML = generateHeader(data);
    //create description
    content += generateDescription(data);
    content += generateOptions(data);
    
    //Generar modales

    content += generateModalAnswerCorrect(data.nextLevel)
    content += generateModalAnswerIncorrect(data.nextLevel)
    //Imprimir todo el contenido en el DOM
    container.innerHTML = content;

}

/**
 * Abre Modal de pregunta correcta o pregunta incorrecta y
 * avanza al siguiente nivel o resta vida
 * @param {boolean} res
 */
const isCorrect = (res) =>{
    if(res)
        openModal('modal-correct')
    else 
        container = document.getElementById('wrapper')
        openModal('modal-incorrect')
        setLives(getLives()-1)
        document.getElementById("header").remove()
        container.insertAdjacentHTML('beforebegin', generateHeader(information));
}