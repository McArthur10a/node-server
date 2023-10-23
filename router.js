const express = require("express");
const Router = express.Router();

// Middleware para verificar si el cuerpo de la solicitud está vacío
function cuerpoVacio(req, res, next) {
  if (req.method === "POST") {
    // Cambia "Push" a "POST"
    if (Object.keys(req.body).length === 0) {
      res
        .status(400)
        .json({ error: "Se solicita un indicador, descripción y estado" });
    } else {
      next();
    }
  }
}

// Middleware para verificar si la información es válida
function infoNoValida(req, res, next) {
  // Cambia el nombre de la función a infoNoValida
  const indicador = req.body.indicador;
  const descripcion = req.body.descripcion;
  const estado = req.body.estado;
  if (!indicador || !descripcion || !estado) {
    res.status(400).json({
      error: "Información no válida o atributos faltantes",
    });
  } else {
    next();
  }
}

// Ruta para crear una tarea (POST)
Router.post("/agregartarea", cuerpoVacio, infoNoValida, (req, res) => {
  // Lógica para crear una tarea
});

// Ruta para eliminar una tarea (DELETE)
Router.delete("/eliminartarea/:indicador", (req, res) => {
  // Lógica para eliminar una tarea
});

// Ruta para actualizar una tarea (UPDATE)
Router.put("/actualizartarea/:indicador", (req, res) => {
  // Lógica para actualizar una tarea
});

module.exports = Router;
