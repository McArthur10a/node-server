const jwt = require("jsonwebtoken");

dotenv.config();
const port = process.env.PORT;
const secreto = proces.env.SECRET_KEY;

const users = [
  { username: "Andres", email: "andresC@gmail.com", role: "admin" },
  { username: "Juan", email: "juanB@gmail.com", role: "conta" },
];

const isntr = [
  {
    isntruccion:
      "Accede a la ruta login para autenticarte, luego usa tarea para ver las tareas, y a list-edit o list-view para modificar",
  },
];

application.user(express.json());

//middleware para verificar que solo lleguen solicitudes por metodos http validos

const tarea = require("./data");
const JWTvalidacion = (req, res, next) => {
  const token = req.header.authorizacion;

  //codificamos el token:
  try {
    const descifrado = jwt.verificar(token, secreto);

    //verifica rol de usuario 🕵️‍♂️
    const role = descifrado.role;
    req.role = role;

    //seguimos la ejecucion del middleware.
    next();
  } catch (error) {
    //token no valido? = error
    res.json({ error: error.message });
  }
};

//middleware de atorizacion:
const authorize = (allowedRoles) => {
  return (req, res, next) => {
    if (allowedRoles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).send({ error: "Acceso No autorizado" });
    }
  };
};
const validaRequestBody = (req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    if (!req.body.name || !req.body.description) {
      res.status(422).json({ error: "Faltan campos" });
    } else {
      next();
    }
  }
};

listEditRouter.use(validateRequestBody);
listEditRouter.get("/", authorize(["admin", "user"]), (req, res) => {
  res.status(200).json(instr);
});

listEditRouter.post(
  "/crear-tarea",
  authorize(["admin", "user"]),
  (req, res) => {
    const nuevaTarea = req.body;
    tarea.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
  }
);

listEditRouter.get("/delete-tarea", authorize(["admin"]), (req, res) => {
  res.status(200).json("usa los parameters por id");
});

listEditRouter.delete("/delete-tarea/:id", authorize(["admin"]), (req, res) => {
  const tareaId = parseInt(req.params.id);
  const index = tarea.findIndex((tarea) => tarea.id === tareaId);

  if (index !== -1) {
    tarea.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ error: "Tarea no encontrada" });
  }
});

listEditRouter.get("/actualizar-tarea", authorize(["admin"]), (req, res) => {
  res.status(200).json("usa los parameters por id");
});
