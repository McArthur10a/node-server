const readline = require('readline');

// Creamos una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Creamos una lista de tareas como un arreglo
const tasks = [];

// Función para agregar una tarea
function addTask(indicator, description) {
  tasks.push({ indicator, description, completed: false });
  console.log(`Tarea agregada: ${indicator} - ${description}`);
}

// Función para eliminar una tarea por su indicador
function deleteTask(indicator) {
  const taskIndex = tasks.findIndex(task => task.indicator === indicator);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log(`Tarea eliminada: ${indicator}`);
  } else {
    console.log(`No se encontró una tarea con el indicador: ${indicator}`);
  }
}

// Función para marcar una tarea como completada
function completeTask(indicator) {
  const task = tasks.find(task => task.indicator === indicator);
  if (task) {
    task.completed = true;
    console.log(`Tarea marcada como completada: ${indicator}`);
  } else {
    console.log(`No se encontró una tarea con el indicador: ${indicator}`);
  }
}

// Función para mostrar todas las tareas
function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach(task => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`${task.indicator} - ${task.description} (${status})`);
  });
}

// Función para procesar los comandos ingresados por el usuario
function processCommand(command) {
  const [action, ...params] = command.split(' ');

  switch (action) {
    case 'add':
      const [indicator, ...description] = params;
      addTask(indicator, description.join(' '));
      break;
    case 'delete':
      deleteTask(params[0]);
      break;
    case 'complete':
      completeTask(params[0]);
      break;
    case 'list':
      showTasks();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Comando no reconocido. Utilice "add", "delete", "complete", "list" o "exit".');
  }
}

// Configuramos la interfaz de lectura para recibir comandos
rl.setPrompt('Ingrese un comando (add/delete/complete/list/exit): ');
rl.prompt();

rl.on('line', command => {
  processCommand(command.trim());
  rl.prompt();
}).on('close', () => {
  console.log('¡Adiós!');
  process.exit(0);
});