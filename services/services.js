const getData = (url) => {
    return fetch(url)
}

const setLives = (lives) => localStorage.setItem('gp-lives', lives)

const getLives = () =>  localStorage.getItem('gp-lives')

const openModal = (nameModal) => {
    new bootstrap.Modal(document.getElementById(nameModal)).show();
}