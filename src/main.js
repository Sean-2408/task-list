const completedContainer = document.getElementById('todo');
const data = [];
data.forEach(item => {
    createListItem(item);
});

// This is the div element that has the id=completed

function createListItem(todo) {
    const div = document.createElement('div');
    const checkboxDiv = document.createElement('div');
    // Here we construct an input element eg: <label></label>
    div.className = 'flex-container'
    const label = document.createElement('label');
    // Here we construct an input element eg: <input>
    const input = document.createElement('input');
    // Here we specify the type of input eg: <input type="checkbox">
    input.type = 'checkbox';
    input.id = todo;
    label.innerText = todo;
    input.name = todo;
    label.htmlFor = todo;
    const button = document.createElement('button');
    // Here we specify the type of input eg: <input type="checkbox">
    button.id = `${todo}_btn_delete`;
    button.innerText = 'Del';
    button.className = 'btn_delete'
    /* Here we add that checkbox to the div, eg: 
    <div> <-- This is the completedContainer
        <label>{{title}}</label>
        <input type="checkbox">
    </div>
    */
    checkboxDiv.append(input, label);
    div.append(checkboxDiv, button);
    completedContainer.append(div);
}


// const submit = favDialog.querySelector("#submit")
// submit.addEventlistener
function addItemToDo(itemName) {
    data.push(itemName);
    createListItem(itemName);
}

function textPrompt() {
    let task = prompt("Task Name:", "");
    if (task != null) {
        // document.getElementById("todo").innerHTML = task;
        createListItem(task)

    }
}

