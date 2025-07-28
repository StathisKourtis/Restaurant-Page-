import burgerGuy from './images/guyholdingburgers.jpg'
export function loadAbout(){
    const content = document.getElementById("content")
    const aboutBox = document.createElement("div")
    content.appendChild(aboutBox)
    aboutBox.id = "aboutBox"
    const image2 = document.createElement("img")
    image2.id="image2"
    const aboutText = document.createElement("div")
    aboutText.id="aboutText"
    aboutBox.appendChild(image2)
    aboutBox.appendChild(aboutText)
    image2.src = burgerGuy
    aboutText.innerHTML="🔥 About Us <br> <br>At Smash & Stack, we believe in two things: <br>Big flavor and slightly smaller regrets. <br>Born out of a love for smashed patties and a mild disdain for late-stage capitalism, we’re not here to upsell you a $20 burger with a side of existential dread. We’re here to grill, stack, and serve — fast, fresh, and unapologetically tasty. <br> <br> No corporate overlords. No frozen hockey pucks. Just real beef, bold sauces, and buns that don’t taste like packaging. So ditch the golden arches, support local greed, and bite into something worth chewing on."
    const button = document.getElementById('about')
    button.style.background = "none"

}
