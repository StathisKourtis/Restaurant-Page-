export function loadHomePage () {
    const content = document.getElementById("content")
    const homeBox = document.createElement("div")
    content.appendChild(homeBox)
    homeBox.id = "homeBox"
    homeBox.innerHTML = "🍔 Welcome to Smash & Stack Your burger cravings end here. At Smash and Stack, we don’t just flip patties — we build flavor bombs. <br />Every burger is made fresh to order, stacked with juicy beef, crisp toppings, and house-made sauces that hit just right. <br />Whether you're here for a classic cheeseburger, a spicy kick, or a towering challenge, we’ve got your taste buds covered. <br />📍 Dine in. Take out. Devour. Pull up a chair, order at the counter, or hit us up online ...however you do it, just bring your appetite.'"
    const button = document.getElementById('home')
    button.style.background = "none"

}





