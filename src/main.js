const data = [todo];
data.forEach(item => {
    createListItem(item);
});

// This is the div element that has the id=completed
//const completedContainer = document.getElementById('todo');

function createListItem(todo){
    const div = document.createElement('div');
    // Here we construct an input element eg: <label></label>
    const label = document.createElement('label');
    // Here we construct an input element eg: <input>
    const input = document.createElement('input');
    // Here we specify the type of input eg: <input type="checkbox">
    input.type = 'checkbox';
    input.id = title;
    label.innerText = task;
    input.name = task;
    label.htmlFor =task;
    /* Here we add that checkbox to the div, eg: 
    <div> <-- This is the completedContainer
        <label>{{title}}</label>
        <input type="checkbox">
    </div>
    */
    div.append(label, input);
    completedContainer.append(div);
}


const submit = favDialog.querySelector("#submit")
submit.addEventlistener
function addItemToDo(itemName){
    data.push(itemName);
    createListItem(itemName);
}

    function textPrompt() {
        let task = prompt("Task Name:", "");
        if (task != null) {
          document.getElementById("todo").innerHTML =task;

        }
      }
