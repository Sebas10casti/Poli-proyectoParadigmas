const generateHeader = (data) =>{
    const lives = localStorage.getItem('gp-lives');
    let content = `
    <nav class="navbar"
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