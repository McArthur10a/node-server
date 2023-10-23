const readline = require("readline");
const { listaTareas, agregarTarea, ajustarEstadoTarea } = require("./tarea.js");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para añadir una nueva tarea
function añadirTarea() {
  console.log("Añadir una nueva tarea:");
  rl.question("Descripción de la tarea: ", (descripcion) => {
    agregarTarea(descripcion); // Cambio aquí
    console.log("Tarea añadida.");
    mostrarMenu();
  });
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
  console.log("--- Lista de tareas ---");
  tasks.listaTareas.forEach((tarea) => {
    console.log(`Indicador: ${tarea.indicador}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.completada ? "Completada" : "No completada"}`);
    console.log("-----------------------");
  });

  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");
  console.log("5. Ajustar estado de tarea");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        añadirTarea();
        break;
      case "2":
        eliminarTarea();
        break;
      case "3":
        completarTarea();
        break;
      case "4":
        rl.close();
        break;
      case "5":
        ajustarEstadoTareaMenu();
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        mostrarMenu();
        break;
    }
  });
}

// Nueva opción en el menú para ajustar el estado de una tarea
function ajustarEstadoTareaMenu() {
  console.log("Ajustar el estado de una tarea:");
  rl.question("Indicador de la tarea: ", (indicador) => {
    rl.question("Marcar como completada (Sí/No): ", (respuesta) => {
      const valor = respuesta.toLowerCase() === "si";
      tasks.ajustarEstadoTarea(indicador, valor);
      console.log(`Estado de la tarea ${indicador} ajustado.`);
      mostrarMenu();
    });
  });
}

// Iniciamos el programa mostrando el menú de opciones
mostrarMenu();
