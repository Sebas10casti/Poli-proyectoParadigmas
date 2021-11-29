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