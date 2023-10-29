# ¿Qué sucedio al usar async y await? #

## El código que proporcionaste crea un programa de lista de tareas que se ejecuta en la consola. El programa sigue este flujo: ##

1. Comienza mostrando la lista de tareas en la consola.
2. Luego, presenta un menú con las siguientes opciones:

- "Añadir tarea"
- "Eliminar tarea"
- "Completar tarea"
- "Salir"

3. El programa espera a que el usuario seleccione una de estas opciones. El usuario debe ingresar el número correspondiente a la opción deseada.

4. Dependiendo de la opción seleccionada, el programa realiza una de las siguientes acciones:

- Si elige "Añadir tarea", el programa le pide al usuario que ingrese una descripción para la nueva tarea. Luego, agrega la tarea a la lista de tareas.
- Si elige "Eliminar tarea", el programa le pide al usuario que ingrese el indicador de la tarea que desea eliminar. - Si la tarea existe en la lista, la elimina.
- Si elige "Completar tarea", el programa le pide al usuario que ingrese el indicador de la tarea que desea marcar como completada. Si la tarea existe en la lista, la marca como completada.
- Si elige "Salir", el programa se cierra.

5. Después de realizar una acción, el programa muestra nuevamente la lista actualizada de tareas y el menú, y espera una nueva selección del usuario, PERO CON ESTE ASYNC Y AWAIT NO FUNCIONA ASI, SINO QUE:

-  Dependiendo de la opción seleccionada, el programa realiza una de las siguientes acciones: 

- Si elige:  
            "Añadir tarea", 
            "Eliminar tarea", 
            "Completar tarea",
            "Salir", 

USTED DIGITA LA DESCRIPCION DE LA TAREA PERO NO REINICIO AL MENU PARA VER LA TAREA QUE INGRESO SINO QUE SE QUEDA ALLI Y NO SALE DE ESA TAREA COMO UN BUG QUE LO DEJA ATRAPADO al igual que las demas opciones sucede el mismo tema.

# Que Prueba usando el método then(). ? #
el metodo si dejo funcionar bien el programa.

## El código que proporcionaste crea un programa de lista de tareas que se ejecuta en la consola. El programa sigue este flujo: ##

1. Comienza mostrando la lista de tareas en la consola.
2. Luego, presenta un menú con las siguientes opciones:

- "Añadir tarea"
- "Eliminar tarea"
- "Completar tarea"
- "Salir"

3. El programa espera a que el usuario seleccione una de estas opciones. El usuario debe ingresar el número correspondiente a la opción deseada.

4. 👆✅Dependiendo de la opción seleccionada, el programa realiza una de las siguientes acciones:
 realiza bien todo sus funciones y sale bien del programa por el metodo que se le pide que es atraves del emtodo salir que es la opcion #4.

