import React from 'react';
import BlueprintCanvas from './BlueprintsCanvas'; // Asegúrate de importar el componente

const BlueprintDetails = ({ selectedBlueprint }) => {
  return (
    <div>
      <h3>Detalles del Blueprint: {selectedBlueprint.name}</h3>
      
      {/* Aquí se aplica la clase canvas-container para centrar */}
      <div className="canvas-container">
        <BlueprintCanvas className="canvas" points={selectedBlueprint.points} />
      </div>
    </div>
  );
};

export default BlueprintDetails;
