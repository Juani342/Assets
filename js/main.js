document.addEventListener("DOMContentLoaded", () => {
    // Buscamos el canvas con el ID correcto
    const canvas = document.getElementById('canvasArt');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // 1. Limpiar el fondo (Color blanco)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 2. Dibujar un rectángulo azul (Sombra de ejemplo)
        ctx.fillStyle = "#0d6efd";
        ctx.fillRect(50, 50, 300, 300);

        // 3. Dibujar un círculo en el centro
        ctx.beginPath();
        ctx.arc(200, 200, 80, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; // Blanco con transparencia
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#ffc107"; // Amarillo de Bootstrap
        ctx.stroke();

        // 4. Texto de confirmación
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.fillText("Proyecto Canvas Listo", 200, 380);

        console.log("¡Canvas dibujado con éxito!");
    } else {
        console.error("Error: No se encontró el canvas con el ID 'canvasArt'");
    }
});