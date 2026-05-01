const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const text = taskInput.value;

    if (text === "") {
        alert("Enter a task first!");
        return;
    }

    // Create the task element
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <select class="reminder-select">
                <option>10 min</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>1 day</option>
            </select>
            <button class="delete-btn" style="margin-left:10px; background:none; border:none; color:red; cursor:pointer;">✕</button>
        </div>
    `;

    // Delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
});
