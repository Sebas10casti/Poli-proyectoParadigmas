const generateHeader = (data) =>{
    return `
    <nav class="navbar" 
        style="background-color:${data.background}; color: ${data.color}">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">${data.title}</span>
        </div>
    </nav>`
}