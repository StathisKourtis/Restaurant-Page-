import { menu } from "./menu.js";

export function loadMenu(){
    const content = document.getElementById("content")
    const menuBox = document.createElement("div")
    content.appendChild(menuBox)
    menuBox.id = "menuBox"
    for (let i = 0; i < menu.length; i++){
        const foodItem = document.createElement("div")
        menuBox.appendChild(foodItem)
        foodItem.classList.add("fooditem")
        const foodImage = document.createElement("img")
        foodItem.appendChild(foodImage)
        foodImage.src = menu[i].image
        foodImage.classList.add("foodimage")
        const foodText = document.createElement("div")
        foodItem.appendChild(foodText)
        foodText.classList.add("foodtext")
        const foodTitle = document.createElement("div")
        foodText.appendChild(foodTitle)
        foodTitle.classList.add("foodtitle")
        foodTitle.textContent=menu[i].title
        const foodDesc = document.createElement("div")
        foodText.appendChild(foodDesc)
        foodDesc.classList.add("fooddesc")
        foodDesc.textContent=menu[i].desc


    }
    const button = document.getElementById('menu')
    button.style.background = "none"
}
