const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lista de tareas
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

// Función para añadir una tarea a la lista
function añadirTarea() {
  rl.question("Descripción de la tarea: ", (descripcion) => {
    // Generamos un indicador único para la tarea
    const indicador = String(listaTareas.length + 1);
    // Creamos un objeto con los datos de la tarea
    const tarea = { indicador, descripcion, completada: false };
    // Añadimos la tarea a la lista
    listaTareas.push(tarea);
    console.log("Tarea añadida correctamente.");
    mostrarMenu();
  });
}

// Función para eliminar una tarea de la lista
function eliminarTarea() {
  rl.question("Indicador de la tarea a eliminar: ", (indicador) => {
    // Buscamos la tarea en la lista por su indicador
    const tareaEncontrada = listaTareas.find(
      (tarea) => tarea.indicador === indicador
    );
    if (tareaEncontrada) {
      // Eliminamos la tarea de la lista
      listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
      console.log("Tarea eliminada correctamente.");
    } else {
      console.log("No se encontró ninguna tarea con ese indicador.");
    }
    mostrarMenu();
  });
}

// Función para marcar una tarea como completada
function completarTarea() {
  rl.question("Indicador de la tarea a completar: ", (indicador) => {
    // Buscamos la tarea en la lista por su indicador
    const tareaEncontrada = listaTareas.find(
      (tarea) => tarea.indicador === indicador
    );
    if (tareaEncontrada) {
      // Marcamos la tarea como completada
      tareaEncontrada.completada = true;
      console.log("Tarea completada correctamente.");
    } else {
      console.log("No se encontró ninguna tarea con ese indicador.");
    }
    mostrarMenu();
  });
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
  console.log("--- Lista de tareas ---");
  listaTareas.forEach((tarea) => {
    console.log(`Indicador: ${tarea.indicador}`);
    console.log(`Descripción: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.completada ? "Completada" : "No completada"}`);
    console.log("-----------------------");
  });
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");

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
      default:
        console.log("Opción inválida. Intente nuevamente.");
        mostrarMenu();
        break;
    }
  });
}

// Iniciamos el programa mostrando el menú de opciones
mostrarMenu();
