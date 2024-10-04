import React, { useRef, useEffect } from 'react';

const BlueprintCanvas = ({ points }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.strokeStyle = '#1ABC9C'; 
    ctx.lineWidth = 2; 

    if (points.length > 0) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y); // Moverse al primer punto
      points.forEach((point) => {
        ctx.lineTo(point.x, point.y); 
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
