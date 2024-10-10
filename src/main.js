// Constant variables are declared here:
const todoContainer = document.getElementById('todo');
const completedContainer = document.getElementById('completed');
const invaderContainer = document.getElementById('invaDiv');
// This is using for debugging purposes:
let data = JSON.parse(localStorage.getItem('taskList')) || [];
data.forEach(item => {
    createListItem(item);
});
// 
// Task items are created here and added to the todo list using user input:
function createListItem(todo) {
    document.getElementById('todo_details').setAttribute('open', '');
    const div = document.createElement('div');
    div.className = 'flex-container'
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'flex-container'
    div.id = `todo_item_${todo}`
    const buttonDiv = document.createElement('div')
    buttonDiv.className = 'flex-container'
    buttonDiv.id = `todo_item_${todo}`
    const label = document.createElement('label');
    label.innerText = todo;
    label.htmlFor = todo;

    const checkDiv = customCheck(todo);

// Created Button Elements
    const delButton = createBtn(todo, 'delete', 'Del');
    delButton.addEventListener("click", () => {
        deleteTask(div.id);
    });

    const comButton = createBtn(todo, 'complete', 'Com');
    comButton.addEventListener("click", () => {
        completeTask(div.id);
        comButton.remove();
        spaceyboi(div.id);
    });
// Created Elements are added to a container here:
    checkboxDiv.append(checkDiv, label);
    buttonDiv.append(comButton, delButton);
    div.append(checkboxDiv, buttonDiv);
    todoContainer.append(div);
} 
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
        data.push(task)
        localStorage.setItem('taskList', JSON.stringify(data));
    }
}

function deleteTask(divId) {
    const element = document.getElementById(divId)
    if (element) {
        element.remove();
        const index = data.indexOf(divId);
        data.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(data)); 
    }
}

function completeTask(divId) {
    const element = document.getElementById(divId)
    completedContainer.append(element)
}

function customCheck(todo) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = todo;
    input.name = todo;
    const checkDiv = document.createElement('div');
    checkDiv.className ='checkbox-wrapper-31'
    const checkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    checkSvg.setAttribute('viewBox', '0 0 35.6 35.6');
    const checkCirc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    checkCirc.setAttribute("class", "background");
    checkCirc.setAttribute('cy', '17.8');
    checkCirc.setAttribute('cx', '17.8');
    checkCirc.setAttribute('r', '17.8');
    const checkStroke = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    checkStroke.setAttribute("class", "stroke");
    checkStroke.setAttribute('cy', '17.8');
    checkStroke.setAttribute('cx', '17.8');
    checkStroke.setAttribute('r', '14.37');
    const polyCheck = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyCheck.setAttribute("class", "check");
    polyCheck.setAttribute('points', '11.78 18.12 15.55 22.23 25.17 12.87');

    checkSvg.append(checkCirc, checkStroke, polyCheck);
    checkDiv.append(input, checkSvg);

    return checkDiv;
}


function spaceyboi(divId){
    const invader = document.createElement('div');
    invader.className = 'space-invader';
}

