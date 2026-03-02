window.onload = function() {
    const canvas = document.getElementById('canvasArt');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // 1. FONDO ESPACIAL
    ctx.fillStyle = "#05050a";
    ctx.fillRect(0, 0, 400, 400);

    // Estrellas
    ctx.fillStyle = "#ffffff";
    for (let i = 0; i < 60; i++) {
        ctx.globalAlpha = Math.random();
        ctx.fillRect(Math.random() * 400, Math.random() * 250, 1.5, 1.5);
    }
    ctx.globalAlpha = 1.0;

    // 2. EL PLANETA
    let radial = ctx.createRadialGradient(200, 140, 15, 200, 140, 85);
    radial.addColorStop(0, "#2c3e50");
    radial.addColorStop(1, "#000000");
    
    ctx.beginPath();
    ctx.arc(200, 140, 85, 0, Math.PI * 2);
    ctx.fillStyle = radial;
    ctx.fill();

    // 3. ANILLO DE HALO
    ctx.strokeStyle = "rgba(0, 212, 255, 0.5)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(200, 140, 190, 50, Math.PI / 15, 0, Math.PI * 2);
    ctx.stroke();

    // 4. TERRENO (Montañas)
    ctx.fillStyle = "#161b22";
    ctx.beginPath();
    ctx.moveTo(0, 320);
    ctx.lineTo(80, 250);
    ctx.lineTo(160, 300);
    ctx.lineTo(260, 240);
    ctx.lineTo(400, 310);
    ctx.lineTo(400, 400);
    ctx.lineTo(0, 400);
    ctx.fill();

    // 5. MASTER CHIEF
    const mx = 320, my = 315;
    ctx.fillStyle = "#3e4e2b"; // Verde armadura
    ctx.fillRect(mx, my, 20, 35); // Cuerpo
    ctx.beginPath();
    ctx.arc(mx + 10, my - 8, 9, 0, Math.PI * 2); // Casco
    ctx.fill();
    ctx.fillStyle = "#d4ac0d"; // Visor dorado
    ctx.fillRect(mx + 4, my - 10, 12, 5);

    console.log("¡Dibujo de Halo listo, JuanCamotes!");
};