// Constant variables are declared here:
const todoContainer = document.getElementById('todo');
const completedContainer = document.getElementById('completed');
// This is using for debugging purposes:
const data = ['poopoo'];
data.forEach(item => {
    createListItem(item);
});
// 
// Task items are created here and added to the todo list using user input:
function createListItem(todo) {
    document.getElementById('todo_details').setAttribute('open', '');
    const div = document.createElement('div');
    const checkboxDiv = document.createElement('div');
    div.className = 'flex-container'
    div.id = `todo_item_${todo}`
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = todo;
    label.innerText = todo;
    input.name = todo;
    label.htmlFor = todo;
// 
// Created Button Elements
    const delButton = createBtn(todo, 'delete', 'Del');
    delButton.addEventListener("click", () => {
        deleteTask(div.id);
    });

    const comButton = createBtn(todo, 'complete', 'Com');
    comButton.addEventListener("click", () => {
        completeTask(div.id);
        comButton.remove()
    });
// 
// Created Elements are added to a container here:
    checkboxDiv.append(input, label);
    div.append(checkboxDiv, comButton, delButton);
    todoContainer.append(div);
}
// 
// This function executes the complete task function whilst removing the complete button from the appended entry.
function eventComplete(divId) {
    completeTask(divId);
    this.remove()
}

function createBtn(id, state, text) {
    const buttonElement = document.createElement('button');
    buttonElement.id = `${todo}_btn_${state}`;
    buttonElement.innerText = text;
    buttonElement.className = `btn_${state}`;
    return buttonElement;
}

function addItemToDo(itemName) {
    data.push(itemName);
    createListItem(itemName);
}

function textPrompt() {
    let task = prompt("Task Name:", "");
    if (task != null) {
        createListItem(task)
    }
}

function deleteTask(divId) {
    const element = document.getElementById(divId)
    if (element) {
        element.remove();

    }

}

function completeTask(divId) {
    const element = document.getElementById(divId)
    completedContainer.append(element)
}