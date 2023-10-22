const readline = require("readline");
let {
  añadirTarea,
  eliminarTarea,
  completarTarea,
  ajustarEstadoTarea,
  mostrarTareas,
} = require("./tarea");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaTareas = [
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
module.exports = {
  añadirTarea,
  eliminarTarea,
  completarTarea,
  ajustarEstadoTarea,
  mostrarTareas,
};
