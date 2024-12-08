// Referencias a los elementos del DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.querySelector('#task-list ul');

// Función para añadir una tarea
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Por favor, escribe una tarea.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-task">Eliminar</button>
  `;

  // Agregar evento para eliminar tarea
  li.querySelector('.delete-task').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = ''; // Limpiar el campo
}

// Evento para añadir tarea
addTaskButton.addEventListener('click', addTask);

// Agregar con "Enter"
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
