menu = document.querySelector("#menu-btn")

menu.onclick = () => {
    document.querySelector("#menu").classList.toggle("show")
    document.querySelector("#suscribe").classList.toggle("suscribe-btn")
}