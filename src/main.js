// Constant variables are declared here:
const todoContainer = document.getElementById('todo');
const completedContainer = document.getElementById('completed');
// This is using for debugging purposes:
const data = ['poo'];
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
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = todo;
    label.innerText = todo;
    input.name = todo;
    label.htmlFor = todo;

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
    // const checkDiv = nicosPoopyCode();
    // input.append(checkSvg);
    checkDiv.append(input, checkSvg);

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

// Created Elements are added to a container here:
    checkboxDiv.append(label);
    buttonDiv.append(comButton, delButton);
    div.append(checkboxDiv, buttonDiv);
    todoContainer.append(div, checkDiv);
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

// function customCheck(divId) {
//     const checkDiv = document.createElement(div)
//     checkDiv.className = 'checkbox-wrapper-31'
//     const checkInput = document.createElement(input)
//     checkInput.type ='checkbox'
//     const checkSvg = document.createElement(svg)
//     checkSvg.viewBox='0 0 35.6 35.6'
//     const checkCirc = document.createElement(circle)
//     checkCirc.className='background'
//     checkCirc.cy='17.8'
//     checkCirc.cx='17.8'
//     checkCirc.r='17.8'
//     const checkStroke = document.createElement(circle)
//     checkStroke.className='stroke'
//     checkStroke.cy='17.8'
//     checkStroke.cx='17.8'
//     checkStroke.r='14.37'
//     const polyCheck = document.createElement(div)
//     polyCheck.className='check'
//     polyCheck.points='11.78 18.12 15.55 22.23 25.17 12.87'

//     checkSvg.append(checkCirc, checkStroke, polyCheck)
//     checkDiv.append(checkInput, checkSvg)
// }


{/* <div class="checkbox-wrapper-31">
  <input type="checkbox"/>
  <svg viewBox="0 0 35.6 35.6">
    <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
    <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
    <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
  </svg>
</div> */}
