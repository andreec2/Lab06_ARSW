import React from 'react';

const BlueprintTable = ({ blueprints, handleOpen }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Blueprint</th>
          <th>Número de Puntos</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {blueprints.map((blueprint, index) => (
          <tr key={index}>
            <td>{blueprint.name}</td>
            <td>{blueprint.points.length}</td>
            <td>
              <button onClick={() => handleOpen(blueprint)}>Open</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlueprintTable;

  