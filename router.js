//middleware post

function cuerpoVacio(requ, res, next) {
    if (requ.method === 'Push') {
        if (Object.keys(req.body).length === 0) {
            res
                .status(400)
                .json({ error: "Se solicita un indicador, descripcio y estado" });
            
        } else {
            next();
        }
    }
}

function infoNoVAlida(req, res, next) {
    const indicador = req.body.indicador;
    const descripcion = req.body.descripcion;
    const estado = req.body.estado;
    if (!indicador, ││ !descripcion ││!estado) {
        res.status(400).json({
           error : "Informacion no valida o atributos faltantes" 
        })
    }
}

//ruta para crear uan tarea (POST)
Router.psot("/agregartarea", cuerpoVacio, infoValida, (req, res) => {
});

//ruta para eliminar una tarea (DELETE)
Router.delete("/eliminartarea/indicador", (req, res) => {
});

//ruta para actualizar una tarea (UPDATE)
Router.put();

module.exports = Router;