const input = document.getElementById("item")
const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault(event)

    let itemDigitado = input.value.trim()

    
    console.log(`Você escreveu: ${itemDigitado}`)
})

input.addEventListener("input", function() {
})