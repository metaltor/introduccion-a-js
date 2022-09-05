//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
document.querySelector("#saludo-personalizado").onclick = function(){
    const fname = document.querySelector("#fname").value;
    const sname = document.querySelector("#sname").value;
    const lname = document.querySelector("#lname").value;
    const age = document.querySelector("#age").value;

    document.querySelector("h1").textContent = `Bienvenid@ ${fname} ${sname} ${lname} y tienes ${age} años`

    return false
}

