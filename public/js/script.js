const booksBtn = document.getElementById('booksBtn')
const clothesBtn = document.getElementById('clothesBtn')
const gamesBtn = document.getElementById('gamesBtn')
const newPredictionBtn = document.getElementById('newPredictionBtn')

const booksForm = document.getElementById('booksForm')
const clothesForm = document.getElementById('clothesForm')
const gamesForm = document.getElementById('gamesForm')

const container = document.getElementById('container')

booksBtn.onclick = function(){
    clothesForm.style.display = "none"
    gamesForm.style.display = "none"
    booksForm.style.removeProperty('display')
    booksForm.style.background="inherit" 
    booksForm.style.backgroundImage ="linear-gradient(rgba(240,240,240,0.8), rgba(240,240,240,0.8))"
    container.style.height = "100%"
    window.scrollTo(0,417);
}

clothesBtn.onclick = function(){
    booksForm.style.display = "none"
    gamesForm.style.display = "none"
    clothesForm.style.removeProperty('display') 
    clothesForm.style.background="inherit" 
    clothesForm.style.backgroundImage ="linear-gradient(rgba(240,240,240,0.8), rgba(240,240,240,0.8))"
    container.style.height = "100%"
    window.scrollTo(0,417);
}

gamesBtn.onclick = function(){
    clothesForm.style.display = "none"
    booksForm.style.display = "none"
    gamesForm.style.removeProperty('display')
    gamesForm.style.background="inherit" 
    gamesForm.style.backgroundImage ="linear-gradient(rgba(240,240,240,0.8), rgba(240,240,240,0.8))"
    container.style.height = "100%"
    window.scrollTo(0,417);
}

