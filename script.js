const buttonL = document.querySelector("#button-left")
const buttonR = document.querySelector("#button-right")
let container = document.querySelector(".container")
let item = container.querySelectorAll(".list .item")
let indicator = document.querySelector(".indicators")
let dots = indicator.querySelectorAll("ul li")
let list = container.querySelector(".list")

let active = 0
let firstPosition = 0
let lastPosition = item.length - 1

function setSlider() {
    let itemOld = container.querySelector(".list .item.active")
    itemOld.classList.remove("active")
    
    let dotsOld = indicator.querySelector("ul li.active")
    dotsOld.classList.remove("active")
    dots[active].classList.add("active")
    indicator.querySelector(".number").innerHTML = `0${active + 1}`
}
buttonL.onclick = () => {
    list.style.setProperty("--calculation", -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    item[active].classList.add("active")

}
buttonR.onclick = () => {
    list.style.setProperty("--calculation", 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    item[active].classList.add("active")
}