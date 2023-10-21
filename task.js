const listaTareas = [
  { indicador: "1", descripcion: "Desayunar", completada: false },
  { indicador: "2", descripcion: "Hacer ejercicio", completada: false },
  { indicador: "3", descripcion: "Tomar una ducha", completada: false },
  {
    indicador: "4",
    descripcion: "Revisar el correo electrónico",
    completada: false,
  },
  {
    indicador: "5",
    descripcion: "Trabajar en el proyecto X",
    completada: false,
  },
  { indicador: "6", descripcion: "Almorzar", completada: false },
  { indicador: "7", descripcion: "Hacer una pausa", completada: false },
  { indicador: "8", descripcion: "Reunión con el equipo", completada: false },
  {
    indicador: "9",
    descripcion: "Realizar llamadas de seguimiento",
    completada: false,
  },
  {
    indicador: "10",
    descripcion: "Hacer las compras para la cena",
    completada: false,
  },
  { indicador: "11", descripcion: "Cocinar la cena", completada: false },
  {
    indicador: "12",
    descripcion: "Relajarse y ver una película",
    completada: false,
  },
];

// Imprimimos la lista de tareas
console.log("--- Lista de tareas ---");
listaTareas.forEach((tarea) => {
  console.log(`Indicador: ${tarea.indicador}`);
  console.log(`Descripción: ${tarea.descripcion}`);
  console.log(`Estado: ${tarea.completada ? "Completada" : "No completada"}`);
  console.log("-----------------------");
});

const _ = require("lodash");
const { resolve } = require("patch");
const express = require("express");

const expre = require("express");
const app = express();
const port = 3003;

//conectores para los router
const listViewRouter = require("./list-view-router");
const lsitEditRouter = require("./list-edit-router");

//ruta para obtener la lista en formato JSON
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//ruta para confirma la lista de tareas en formato JSON
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//ruta para llamar al post con body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas para las tareas
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.listen(port, () => {
  console.log("Servidor corriendo en http://localhost:" + port);
});

// Creamos una interfaz de lectura y escritura
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Creamos una lista de tareas como un arreglo
const tasks = [];

// Función para agregar una tarea
function addTask(indicator, description) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks.push({ indicator, description, completed: false });
      console.log(`Tarea ${indicator}: ${description} agregada`);
      resolve(); //Resuelve la procesa cuando se completa la tarea
    }, 1000); //simulando una operacion asincronica.
  });
}

// Función para eliminar una tarea por su indicador
function deleteTask(indicator) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskIndex = tasks.findIndex((task) => task.indicator === indicator);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        console.log(`Tarea eliminada: ${indicator}`);
        resolve(); // Resuelve la promesa si no se encuentra la tarea.
      } else {
        console.log(`No se encontró una tarea con el indicador: ${indicator}`);
        reject(); //Rechaza la promesa si no se encuentra la tarea.
      }
    }, 1000);
  });
}
// Función para marcar una tarea como completada
function completeTask(indicator) {
  const task = tasks.find((task) => task.indicator === indicator);
  if (task) {
    task.completed = true;
    console.log(`Tarea marcada como completada: ${indicator}`);
  } else {
    console.log(`No se encontró una tarea con el indicador: ${indicator}`);
  }
}

// Función para mostrar todas las tareas
function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task) => {
    const status = task.completed ? "Completada" : "No completada";
    console.log(`${task.indicator} - ${task.description} (${status})`);
  });
}

// Función para procesar los comandos ingresados por el usuario
function processCommand(command) {
  const [action, ...params] = command.split(" ");

  switch (action) {
    case "add":
      if (params.length > 2) {
        //si hay parametros, toma el primer parámetro como la descripcion de la tarea
        const indicator = params[0];
        const description = params.slice(1).join(" ");
        addTask(indicator, description);
      } else if (params.length === 1) {
        //Si solo hay un parametro, solicita la descripcion al usuario
        rl.question("Ingrese una descripcion para la tarea:", (description) => {
          addTask(params[0], description);
          rl.prompt();
        });
      } else {
        // si no hay parametros, solicita tanto el indicador como la descripcion al usuario
        rl.question("Ingrese un indicador para la tarea:", (indicator) => {
          rl.question(
            "Ingrese una descripcion para la tarea:",
            (description) => {
              addTask(indicator, description);
              rl.prompt();
            }
          );
        });
      }
      break;
    case "delete":
      deleteTask(params[0]);
      break;
    case "complete":
      completeTask(params[0]);
      break;
    case "list":
      showTasks();
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log(
        'Comando no reconocido. Utilice "add", "delete", "complete", "list" o "exit".'
      );
  }
}

// Configuramos la interfaz de lectura para recibir comandos
rl.setPrompt("Ingrese un comando (add/delete/complete/list/exit): ");
rl.prompt();

rl.on("line", (command) => {
  processCommand(command.trim());
  rl.prompt();
}).on("close", () => {
  console.log("¡Adiós!");
  process.exit(0);
});
