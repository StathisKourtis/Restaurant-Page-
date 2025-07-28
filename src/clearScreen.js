export function clearScreen() {
    const content = document.getElementById("content")
    content.innerHTML=""
    const buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor="black"
    }

}
