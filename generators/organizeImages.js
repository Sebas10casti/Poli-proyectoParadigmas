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
    const header = document.getElementById('header');
    //colro de fondo
    document.body.style.background = data.background;
    //crear Header
    header.insertAdjacentHTML('afterend', generateHeader(data));
    //create descr

    Sortable.create(simpleList, {
        
    });
}


