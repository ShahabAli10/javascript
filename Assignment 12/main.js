const input = document.querySelector('.input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


function add() {
    const task = input.value.trim(); 

    if (task !== '') {
        
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        
        todoItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

        
        ul.appendChild(todoItem);

        
        input.value = '';

       
        todoItem.querySelector('.delete-btn').addEventListener('click', () => {
            ul.removeChild(todoItem); 
        });
    } else {
        alert('Please enter a task!');
    }
}
