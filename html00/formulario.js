console.log("formulario cargado");
const boton = document.getElementById("enviar");
boton.addEventListener("click", function() {
    console.log("formulario enviado");
    let user = document.getElementById("nombre");
    let password = document.getElementById("password");
    console.log(user.value);
    console.log(password.value);
});