const ulElement = document.querySelector("#tasks ul")
const tasks = []

function removeTask (index) {
    tasks.splice(index, 1)
    const taskElement = document.querySelector(`#tasks li#item-${index}`)
    ulElement.removeChild(taskElement)
}

function addTask (text) {
    const total = tasks.push(text)
    const index = total - 1

    const taskElement = document.createElement("li")
    const textElement = document.createElement("span")
    const buttonElement = document.createElement("button")

    taskElement.setAttribute("id", `item-${index}`)

    buttonElement.onclick = () => removeTask(index)

    taskElement.appendChild(textElement)
    taskElement.appendChild(buttonElement)

    textElement.innerHTML = text
    buttonElement.innerHTML = "Remover"

    ulElement.appendChild(taskElement)
}

const btnElement = document.querySelector("#form button")
const inputElement = document.querySelector("#form input")

btnElement.onclick = () => {
    if(inputElement.value) {
        addTask(inputElement.value)
        inputElement.value = ""
    }
    console.log(tasks)
}