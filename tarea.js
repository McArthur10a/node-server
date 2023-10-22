// tasks.js
const listaTareas = [
  // La lista de tareas se mueve aquí
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

function añadirTarea(descripcion) {
  const indicador = String(listaTareas.length + 1);
  const tarea = { indicador, descripcion, completada: false };
  listaTareas.push(tarea);
}

function eliminarTarea(indicador) {
  const tareaEncontrada = listaTareas.find(
    (tarea) => tarea.indicador === indicador
  );
  if (tareaEncontrada) {
    listaTareas.splice(listaTareas.indexOf(tareaEncontrada), 1);
  }
}

function completarTarea(indicador) {
  const tareaEncontrada = listaTareas.find(
    (tarea) => tarea.indicador === indicador
  );
  if (tareaEncontrada) {
    tareaEncontrada.completada = true;
  }
}
//ajusta el estado de la tarea
function ajustarEstadoTarea(indicador, valor) {
  const tareaEncontrada = listaTareas.find(
    (tarea) => tarea.indicador === indicador
  );
  if (tareaEncontrada) {
    tareaEncontrada.completada = valor;
  }
}

module.exports = {
  listaTareas,
  añadirTarea,
  eliminarTarea,
  completarTarea,
};
