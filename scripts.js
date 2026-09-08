const inputValue = document.getElementById("item")
const form = document.querySelector("form")
const lista = document.querySelector(".list-compras")

form.addEventListener("submit", function(event){
    event.preventDefault(event)

    let itemDigitado = inputValue.value.trim()

    const li = document.createElement("li")
    li.classList.add("itens-li")

    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const span = document.createElement("span")
    span.textContent = itemDigitado
    const removeButton = document.createElement("button")
    removeButton.classList.add("btn-remover")
    removeButton.textContent = "🗑"

    label.appendChild(checkbox)
    label.appendChild(span)

    li.appendChild(label)
    li.appendChild(removeButton)

    lista.appendChild(li)

    console.log(itemDigitado)
})

inputValue.addEventListener("input", function() {
})