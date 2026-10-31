alert("¡Bienvenido a mi página web!");

console.log("JavaScript está funcionando");
const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "¡Gracias por hacer clic! 🎉";
});