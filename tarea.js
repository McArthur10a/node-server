const readline = require("readline");
const express = require("express");
const app = express();
const puerto = 3002;
app.get("/tareas", (req, res) => {
  res.json(listaTareas);
});
app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
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
// Función para añadir una tarea a la lista (retorna una promesa)
function añadirTarea() {
  return new Promise((resolve) => {
    rl.question("Descripción de la tarea: ", (descripcion) => {
      // Generamos un indicador único para la tarea
      const indicador = String(listaTareas.length + 1);
      // Creamos un objeto con los datos de la tarea
      const tarea = { indicador, descripcion, completada: false };
      // Añadimos la tarea a la lista
      listaTareas.push(tarea);
      console.log("Tarea añadida correctamente.");
      resolve(); // Resolvemos la promesa
    });
  });
}
// Función para eliminar una tarea de la lista (retorna una promesa)
function eliminarTarea() {
  return new Promise((resolve, reject) => {
    rl.question("Indicador de la tarea a eliminar: ", (indicador) => {
      // Buscamos la tarea en la lista por su indicador
      const tareaEncontrada = listaTareas.find(
        (tarea) => tarea.indicador === indicador
      );
      if (tareaEncontrada) {
        // Eliminamos la tarea de la lista
        listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
        console.log("Tarea eliminada correctamente.");
        resolve(); // Resolvemos la promesa
      } else {
        console.log("No se encontró ninguna tarea con ese indicador.");
        reject(new Error("Tarea no encontrada")); // Rechazamos la promesa en caso de error
      }
    });
  });
}
// Función para marcar una tarea como completada (retorna una promesa)
function completarTarea() {
  return new Promise((resolve, reject) => {
    rl.question("Indicador de la tarea a completar: ", (indicador) => {
      // Buscamos la tarea en la lista por su indicador
      const tareaEncontrada = listaTareas.find(
        (tarea) => tarea.indicador === indicador
      );
      if (tareaEncontrada) {
        // Marcamos la tarea como completada
        tareaEncontrada.completada = true;
        console.log("Tarea completada correctamente.");
        resolve(); // Resolvemos la promesa
      } else {
        console.log("No se encontró ninguna tarea con ese indicador.");
        reject(new Error("Tarea no encontrada")); // Rechazamos la promesa en caso de error
      }
    });
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
        añadirTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
        break;
      case "2":
        eliminarTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
        break;
      case "3":
        completarTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
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
// Evento de cierre de la consola
rl.on("close", () => {
  console.log("Programa terminado.");
  process.exit(0);
});
module.export = { listaTareas };
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

// Función para añadir una tarea a la lista (retorna una promesa)
function añadirTarea() {
  return new Promise((resolve) => {
    rl.question("Descripción de la tarea: ", (descripcion) => {
      // Generamos un indicador único para la tarea
      const indicador = String(listaTareas.length + 1);
      // Creamos un objeto con los datos de la tarea
      const tarea = { indicador, descripcion, completada: false };
      // Añadimos la tarea a la lista
      listaTareas.push(tarea);
      console.log("Tarea añadida correctamente.");
      resolve(); // Resolvemos la promesa
    });
  });
}

// Función para eliminar una tarea de la lista (retorna una promesa)
function eliminarTarea() {
  return new Promise((resolve, reject) => {
    rl.question("Indicador de la tarea a eliminar: ", (indicador) => {
      // Buscamos la tarea en la lista por su indicador
      const tareaEncontrada = listaTareas.find(
        (tarea) => tarea.indicador === indicador
      );
      if (tareaEncontrada) {
        // Eliminamos la tarea de la lista
        listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
        console.log("Tarea eliminada correctamente.");
        resolve(); // Resolvemos la promesa
      } else {
        console.log("No se encontró ninguna tarea con ese indicador.");
        reject(new Error("Tarea no encontrada")); // Rechazamos la promesa en caso de error
      }
    });
  });
}
// Función para marcar una tarea como completada (retorna una promesa)
function completarTarea() {
  return new Promise((resolve, reject) => {
    rl.question("Indicador de la tarea a completar: ", (indicador) => {
      // Buscamos la tarea en la lista por su indicador
      const tareaEncontrada = listaTareas.find(
        (tarea) => tarea.indicador === indicador
      );
      if (tareaEncontrada) {
        // Marcamos la tarea como completada
        tareaEncontrada.completada = true;
        console.log("Tarea completada correctamente.");
        resolve(); // Resolvemos la promesa
      } else {
        console.log("No se encontró ninguna tarea con ese indicador.");
        reject(new Error("Tarea no encontrada")); // Rechazamos la promesa en caso de error
      }
    });
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
        añadirTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
        break;
      case "2":
        eliminarTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
        break;
      case "3":
        completarTarea()
          .then(() => mostrarMenu())
          .catch((error) => {
            console.error(error);
            mostrarMenu();
          });
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

// Evento de cierre de la consola
rl.on("close", () => {
  console.log("Programa terminado.");
  process.exit(0);
});
module.export = { listaTareas };
