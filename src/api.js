export async function getTodoItems(){
    const options = {
        method: 'GET', 
        headers: {'accept': 'application/json'}
      };
      
     return fetch('http://localhost:3000/task-list', options)
        .then(response => response.json())
        .then(response => {
            const formattedData = response.map(item => item.id);
            return formattedData;
        })
        .catch(err => console.error(err));
}

export async function deleteTaskItemById(taskId){
    const options = {
        method: 'DELETE', 
        headers: {'accept': 'application/json'}
      };
      
     return fetch(`http://localhost:3000/todo/${taskId}`, options)
        .then(response => {
            console.log(`Item deleted: ${taskId}`);
            
        })
        .catch(err => console.error(err));
}
