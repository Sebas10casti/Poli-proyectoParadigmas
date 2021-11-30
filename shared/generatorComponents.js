const generateHeader = (data) =>{
    const lives = localStorage.getItem('gp-lives');
    let content = `
    <nav class="navbar" id="header"
        style="background-color:${data.background}; color: ${data.color}">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">${data.title}</span>
            <div>`
    
    for(let i= 0; i<lives; i++){
        content+=`<img src="../images/live.png"/ width="50px">`
    }
    content += `
            </div>
        </div>
    </nav>`
    return content
}

const generateDescription = ({description}) =>{
    return `
    <div class="description-level">
        <p>${description}</p>
    </div>`
}

const generateOptions = ({items, question}) =>{
    let content = `<h3 class="text-center mt-4">${question}:</h3>
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="d-grid gap-2">`
    items.forEach(element => {
        content += `<button class="btn btn-light mt-3" type="button" onclick="isCorrect(${element.correct})">${element.text}</button>`
    });
    content += `
            </div>
        </div>
    </div>`

    return content
}

const generateModalAnswerCorrect = (goToUrl) => {
    return `<div class="modal fade" id="modal-correct" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Felicidades</h5>
        </div>
        <div class="modal-body">
         Continua aprendiendo, vas muy bien!
        </div>
        <div class="modal-footer">
          <a class="btn btn-primary" href="${goToUrl}" data-bs-toggle="modal">Siguiente Nivel</a>
        </div>
      </div>
    </div>
  </div>`
}

const generateModalAnswerIncorrect = () => {
    return `<div class="modal fade" id="modal-incorrect" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Upss!</h5>
        </div>
        <div class="modal-body">
         Revisa tus Respuestas
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>        
        </div>
      </div>
    </div>
  </div>`
}

const generateOrganizeImages = ({itemsImages}) => {
  let content = `<div class="col d-flex justify-content-center">
    <ul class="list-group list-group-horizontal content-images" id="images-list">`;

  itemsImages.forEach(element =>{
    content += `
    <li class="list-group-item" data-text="${element.name}">
      <div class="container-image" >
          <img src="${element.urlImage}" alt="">
      </div>
    </li>`
  });
  content += `
    </ul>
  </div>`;
  
  return content;
}

const generateOrganizeText = ({itemsText}) => {
  let content = `<div class="col d-flex justify-content-center">
  <ul class="list-group list-group-horizontal content-answers" id="text-list">`;

  itemsText.forEach(element =>{
    content += `
    <li class="list-group-item" data-text="${element}">
          ${element}
    </li>`
  });
  content += `
    </ul>
  </div>`;
  return content;
}

const generateOrganizeButtons = ({nextLevel}) => {
  return `
  <div class="col-12 d-flex justify-content-center mt-4">
    <button class="btn btn-outline-white" type="button" id="validateButton" onclick="validateDragImagesResults()">Validar</button>
    <button class="btn btn-outline-white" style="display: none;" type="button" id="nextButton" onclick="nextLevel(${nextLevel})">Siguiente Nivel</button>
  </div>
  `
}