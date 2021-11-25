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
    container.innerHTML = content;
    
}

/**
 * Abre Modal de pregunta correcta o pregunta incorrecta y
 * avanza al siguiente nivel o resta vida
 * @param {boolean} res
 */
const isCorrect = (res) =>{
    res
    ? alert('correcta')
    : alert('incorrecta')
}