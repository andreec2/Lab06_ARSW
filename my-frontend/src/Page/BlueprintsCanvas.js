import React, { useRef, useEffect } from 'react';

const BlueprintCanvas = ({ points }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Limpiar el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configurar estilos del dibujo
    ctx.strokeStyle = '#1ABC9C'; // Color de la línea
    ctx.lineWidth = 2; // Ancho de la línea

    // Comenzar a dibujar los puntos
    if (points.length > 0) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y); // Moverse al primer punto
      points.forEach((point) => {
        ctx.lineTo(point.x, point.y); // Dibujar líneas a los puntos restantes
      });
      ctx.closePath();
      ctx.stroke(); // Dibujar las líneas en el canvas
    }
  }, [points]);

  return (
    <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid #000' }} />
  );
};

export default BlueprintCanvas;
