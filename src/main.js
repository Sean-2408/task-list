import { getTodoItems, deleteTaskItemById } from './api.js';
// Constant variables are declared here:
const tasklistKey = 'taskList';
const comlistKey = 'comList';
const todoContainer = document.getElementById('todo');
const completedContainer = document.getElementById('completed');
// This is using for debugging purposes:
let comData = JSON.parse(localStorage.getItem(comlistKey)) || [];
comData.forEach(item => {
    createListItem(item, true);
});

let data = [];

async function start(){
    data = await getTodoItems();
    data.forEach(item => {
        createListItem(item, false);
    });
}

start();

document.getElementById('add_task').addEventListener('click', () => textPrompt());
// 
// Task items are created here and added to the todo list using user input:
function createListItem(todo, isCompleted) {
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
    delButton.addEventListener("click", async() => {
        const taskName= div.id.split('todo_item_')[1];
        await deleteTaskItemById(taskName);
        deleteTask(div.id);
    });

    const comButton = createBtn(todo, 'complete', 'Com');
    comButton.addEventListener("click", () => {
        completeTask(div.id);
        comButton.remove();
    });
// Created Elements are added to a container here:
    checkboxDiv.append(checkDiv, label);
    buttonDiv.append(!isCompleted ? comButton : '', delButton);
    div.append(checkboxDiv, buttonDiv);
    if (isCompleted){
        console.log('completed: ', todo);
        completedContainer.append(div);
    } else{
        console.log('Not completed: ', todo);
        todoContainer.append(div);
    }
    
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
        taskStore();  
    }
}

function deleteTask(divId) {
    const element = document.getElementById(divId)
    if (element) {
        element.remove();
        removeItemFromTaskArray(divId);
        removeItemFromComArray(divId);
    }
}

function completeTask(divId) {
    const element = document.getElementById(divId)
    completedContainer.append(element)
    const taskName= divId.split('todo_item_')[1];
    comData.push(taskName);
    comStore();
    removeItemFromTaskArray(taskName);
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

function taskStore(){
    localStorage.setItem(tasklistKey, JSON.stringify(data));
}

function comStore(){
    localStorage.setItem(comlistKey, JSON.stringify(comData));
}

function removeItemFromTaskArray(taskName){
    const index = data.indexOf(taskName);
        data.splice(index, 1);
        taskStore();
}

function removeItemFromComArray(taskName){
    const index = comData.indexOf(taskName);
        comData.splice(index, 1);
        comStore();

}