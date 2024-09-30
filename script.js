/*// Select necessary elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskAction);
document.addEventListener('DOMContentLoaded', loadTasksFromStorage);

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
        showNotification('Task added successfully', 'success');  // Show notification
        saveTasksToStorage();
        checkAllTasksComplete();
    } else {
        showNotification('Please enter a task', 'error');  // Show notification for empty input
    }
}

// Create task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create actions container
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔';
    completeButton.classList.add('complete-btn');
    taskActions.appendChild(completeButton);

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '✎';
    editButton.classList.add('edit-btn');
    taskActions.appendChild(editButton);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.classList.add('delete-btn');
    taskActions.appendChild(deleteButton);

    // Append actions to the task
    li.appendChild(taskActions);

    return li;
}

// Handle task actions (complete, edit, delete)
function handleTaskAction(e) {
    if (e.target.classList.contains('complete-btn')) {
        e.target.closest('.task-item').firstChild.classList.toggle('complete');
        saveTasksToStorage();
        showNotification('Task marked as completed', 'success');  // Show notification
        checkAllTasksComplete();
    }
    if (e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.closest('.task-item').firstChild;
        const newTask = prompt('Edit your task', taskItem.textContent);
        if (newTask) {
            taskItem.textContent = newTask;
            saveTasksToStorage();
            showNotification('Task edited successfully', 'success');  // Show notification
        }
    }
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.task-item').classList.add('fade-out');
        setTimeout(() => {
            e.target.closest('.task-item').remove();
            saveTasksToStorage();
            showNotification('Task deleted successfully', 'success');  // Show notification
            checkAllTasksComplete();
        }, 300); // Delay to show the fade-out effect
    }
}

// Notifications
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2000); // Notification disappears after 2 seconds
}

// Check if all tasks are completed and show success message
function checkAllTasksComplete() {
    const tasks = document.querySelectorAll('.task-item');
    const completedTasks = document.querySelectorAll('.task-item.complete');

    if (tasks.length > 0 && tasks.length === completedTasks.length) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = '🎉 All tasks completed! Well done! 🎉';
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000); // Success message disappears after 3 seconds
    }
}

// Local Storage - Save tasks
function saveTasksToStorage() {
    const tasks = [];
    document.querySelectorAll('.task-item span').forEach(task => tasks.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
    });
}
*/


/****************************************************************************************/
// Select necessary elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskAction);
document.addEventListener('DOMContentLoaded', loadTasksFromStorage);

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
        showNotification('Task added successfully', 'success');  // Show notification
        saveTasksToStorage();
        checkAllTasksComplete();
    } else {
        showNotification('Please enter a task', 'error');  // Show notification for empty input
    }
}

// Create task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create actions container
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔';
    completeButton.classList.add('complete-btn');
    taskActions.appendChild(completeButton);

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '✎';
    editButton.classList.add('edit-btn');
    taskActions.appendChild(editButton);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '✖';
    deleteButton.classList.add('delete-btn');
    taskActions.appendChild(deleteButton);

    // Append actions to the task
    li.appendChild(taskActions);

    return li;
}

// Handle task actions (complete, edit, delete)
function handleTaskAction(e) {
    if (e.target.classList.contains('complete-btn')) {
        e.target.closest('.task-item').classList.toggle('complete');
        saveTasksToStorage();
        showNotification('Task marked as completed', 'success');  // Show notification
        checkAllTasksComplete();
    }
    if (e.target.classList.contains('edit-btn')) {
        const taskItem = e.target.closest('.task-item').firstChild;
        const newTask = prompt('Edit your task', taskItem.textContent);
        if (newTask) {
            taskItem.textContent = newTask;
            saveTasksToStorage();
            showNotification('Task edited successfully', 'success');  // Show notification
        }
    }
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.task-item').classList.add('fade-out');
        setTimeout(() => {
            e.target.closest('.task-item').remove();
            saveTasksToStorage();
            showNotification('Task deleted successfully', 'success');  // Show notification
            checkAllTasksComplete();
        }, 300); // Delay to show the fade-out effect
    }
}

// Notifications
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2000); // Notification disappears after 2 seconds
}

// Check if all tasks are completed and show success message
function checkAllTasksComplete() {
    const tasks = document.querySelectorAll('.task-item');
    const completedTasks = document.querySelectorAll('.task-item.complete');

    if (tasks.length > 0 && tasks.length === completedTasks.length) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = '🎉 All tasks completed! Well done! 🎉';
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000); // Success message disappears after 3 seconds
    }
}

// Local Storage - Save tasks
function saveTasksToStorage() {
    const tasks = [];
    document.querySelectorAll('.task-item span').forEach(task => tasks.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
    });
}
