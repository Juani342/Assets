// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    // 1. Obtener el canvas y su contexto
    const canvas = document.getElementById('canvasArt');
    const ctx = canvas.getContext('2d');

    // 2. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- DIBUJAR FONDO ---
    // Cielo oscuro
    ctx.fillStyle = "#1e2b4f"; // Azul oscuro profundo
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- DIBUJAR ESTRELLAS ---
    ctx.fillStyle = "white";
    for (let i = 0; i < 50; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * (canvas.height * 0.4); // Solo en la parte superior
        let size = Math.random() * 2;
        ctx.fillRect(x, y, size, size);
    }

    // --- DIBUJAR LUNA/SOL ---
    ctx.beginPath();
    ctx.arc(330, 60, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#fffacd"; // Amarillo pálido
    ctx.fill();
    ctx.closePath();

    // --- DIBUJAR EL PLANETA CON ANILLOS ---
    // Anillos (Aros finos)
    ctx.strokeStyle = "#87ceeb"; // Azul cielo claro
    ctx.lineWidth = 2;
    // Anillo exterior
    ctx.beginPath();
    ctx.ellipse(200, 140, 180, 50, 0, 0, Math.PI * 2);
    ctx.stroke();
    // Anillo interior
    ctx.beginPath();
    ctx.ellipse(200, 140, 160, 40, 0, 0, Math.PI * 2);
    ctx.stroke();

    // El planeta central (Tierra/Halo)
    ctx.beginPath();
    ctx.arc(200, 140, 80, 0, Math.PI * 2);
    // Gradiente para el planeta
    let gradPlaneta = ctx.createRadialGradient(200, 140, 20, 200, 140, 80);
    gradPlaneta.addColorStop(0, "#4a6bbf"); // Centro más claro
    gradPlaneta.addColorStop(1, "#1c2a4d"); // Borde oscuro
    ctx.fillStyle = gradPlaneta;
    ctx.fill();
    ctx.closePath();

    // --- DIBUJAR MONTAÑAS/COLINAS ---
    ctx.fillStyle = "#5d8233"; // Verde oliva oscuro
    ctx.beginPath();
    ctx.moveTo(0, 300); // Empezar en la izquierda
    ctx.lineTo(80, 260);
    ctx.lineTo(150, 290);
    ctx.lineTo(220, 270);
    ctx.lineTo(300, 310);
    ctx.lineTo(canvas.width, 280); // Llegar a la derecha
    ctx.lineTo(canvas.width, canvas.height); // Abajo derecha
    ctx.lineTo(0, canvas.height); // Abajo izquierda
    ctx.fill();
    ctx.closePath();

    // --- DIBUJAR LA CIUDAD BLOCKS (Estilo minimalista) ---
    ctx.fillStyle = "#8a6db3"; // Color morado de los edificios
    // Edificio grande izquierdo
    ctx.fillRect(50, 290, 60, 80);
    ctx.fillRect(70, 310, 40, 60); // Detalle bloque

    // Bloques del centro
    ctx.fillRect(130, 320, 40, 50);
    ctx.fillStyle = "#705696"; // Tono más oscuro
    ctx.fillRect(150, 340, 30, 30);

    // Estructura derecha
    ctx.fillStyle = "#a185cf"; // Tono más claro
    ctx.fillRect(210, 330, 40, 40);
    ctx.fillStyle = "#8a6db3"; // Color base
    ctx.fillRect(230, 350, 30, 20);

    // --- DIBUJAR VEHÍCULO VOLADOR (Pelican estilizado) ---
    ctx.fillStyle = "#a9a9a9"; // Gris metálico
    // Cuerpo principal
    ctx.beginPath();
    ctx.moveTo(270, 250);
    ctx.lineTo(350, 250);
    ctx.lineTo(330, 280);
    ctx.lineTo(280, 280);
    ctx.fill();
    // Cabina
    ctx.fillStyle = "#696969";
    ctx.fillRect(290, 260, 20, 15);
    // Motores/Alerones
    ctx.fillStyle = "#a9a9a9";
    ctx.fillRect(250, 260, 20, 10);
    ctx.fillRect(350, 260, 15, 10);

    // --- DIBUJAR AL JEFE MAESTRO (Master Chief) - VERSIÓN Spartan ---
    // Posición base
    const spartanX = 330;
    const spartanY = 320;

    // 1. PIERNAS
    ctx.fillStyle = "#3a5f18"; // Verde armadura oscuro
    // Pierna izquierda
    ctx.fillRect(spartanX - 6, spartanY + 30, 8, 20);
    // Pierna derecha
    ctx.fillRect(spartanX + 4, spartanY + 30, 8, 20);
    // Botas (Detalle negro)
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(spartanX - 7, spartanY + 48, 10, 5);
    ctx.fillRect(spartanX + 3, spartanY + 48, 10, 5);

    // 2. TORSO Y ARMADURA
    ctx.fillStyle = "#4a6f28"; // Verde armadura UNSC
    // Pecho/Abdomen
    ctx.beginPath();
    ctx.moveTo(spartanX - 10, spartanY + 5); // Hombro izq
    ctx.lineTo(spartanX + 10, spartanY + 5); // Hombro der
    ctx.lineTo(spartanX + 8, spartanY + 30); // Cintura der
    ctx.lineTo(spartanX - 8, spartanY + 30); // Cintura izq
    ctx.closePath();
    ctx.fill();
    
    // Hombreras
    ctx.beginPath();
    ctx.arc(spartanX - 10, spartanY + 8, 5, 0, Math.PI * 2); // Hombro izq
    ctx.arc(spartanX + 10, spartanY + 8, 5, 0, Math.PI * 2); // Hombro der
    ctx.fill();
    ctx.closePath();

    // 3. BRAZOS
    ctx.fillStyle = "#3a5f18"; // Verde oscuro
    // Brazo izquierdo (Sosteniendo el arma)
    ctx.fillRect(spartanX - 14, spartanY + 10, 6, 20);
    // Brazo derecho (Sosteniendo el arma)
    ctx.fillRect(spartanX + 8, spartanY + 10, 6, 20);

    // 4. CABEZA Y CASCO
    ctx.fillStyle = "#4a6f28"; // Verde base
    // Forma del casco (No es un círculo perfecto)
    ctx.beginPath();
    ctx.ellipse(spartanX, spartanY, 10, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    
    // Visor dorado (Estilizado)
    ctx.fillStyle = "#d4af37"; // Dorado metálico
    ctx.beginPath();
    ctx.moveTo(spartanX - 6, spartanY - 3);
    ctx.lineTo(spartanX + 6, spartanY - 3);
    ctx.lineTo(spartanX + 4, spartanY + 3);
    ctx.lineTo(spartanX - 4, spartanY + 3);
    ctx.closePath();
    ctx.fill();
    
    // Detalle negro en la mandíbula del casco
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(spartanX - 5, spartanY + 6, 10, 3);

    // 5. ARMA (Rifle de Asalto MA5D)
    ctx.fillStyle = "#333"; // Gris oscuro/Negro
    // Cuerpo del arma
    ctx.fillRect(spartanX - 5, spartanY + 18, 30, 6);
    // Culata y mira
    ctx.fillRect(spartanX + 15, spartanY + 15, 8, 4);
    ctx.fillRect(spartanX + 22, spartanY + 18, 5, 3); // Cañón

    // 6. DETALLE DE MOCHILA/PROPULSOR
    ctx.fillStyle = "#3a5f18";
    ctx.fillRect(spartanX - 8, spartanY + 5, 16, 15);

    // --- DIBUJAR CAJAS/COBERTURA ---
    ctx.fillStyle = "#8b4513"; // Marrón madera/metal
    ctx.fillRect(350, 340, 25, 25);
    ctx.fillRect(375, 340, 20, 25);
    ctx.fillRect(360, 315, 20, 25); // Caja encima

    console.log("¡Neural Simulation completa, Spartan!");
});