
const btn = document.getElementById("btn")


const menu = document.getElementById("menu")
const container = document.querySelector(".container")

btn.addEventListener('click', function(){
    menu.classList.toggle("collapsed");
    container.classList.toggle("opacity")
})
