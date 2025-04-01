const boton = document.getElementById("cambiarColorBtn");
    const parrafo = document.getElementById("cambiarcolor");

    // Función para cambiar el color
    boton.addEventListener("click", function() {
      parrafo.style.color = "red"; // Cambiar el color a rojo
    });