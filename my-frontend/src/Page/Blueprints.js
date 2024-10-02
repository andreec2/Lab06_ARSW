import React, { useState } from 'react';
import axios from 'axios';
import './Blueprints.css';

const API_URL = 'http://localhost:8080/api';

const Blueprints = () => {
  const [blueprints, setBlueprints] = useState([]);
  const [author, setAuthor] = useState(''); // Estado para almacenar el nombre del autor
  const [submitted, setSubmitted] = useState(false); // Estado para controlar si se ha enviado el formulario
  const [totalPoints, setTotalPoints] = useState(0); // Estado para almacenar el total de puntos
  const [selectedBlueprint, setSelectedBlueprint] = useState(null); // Estado para almacenar el blueprint seleccionado

  const handleInputChange = (event) => {
    setAuthor(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que la página se recargue
    setSubmitted(true); // Marca que el formulario ha sido enviado
    try {
       const response = await axios.get(`${API_URL}/blueprints/${author}`);
      setBlueprints(response.data); // Almacena los blueprints en el estado

      // Calcular el total de puntos de todos los blueprints
      const total = response.data.reduce((sum, blueprint) => sum + blueprint.points.length, 0);
      setTotalPoints(total); // Actualiza el total de puntos
    } catch (error) {
      console.error("Error fetching blueprints:", error);
    }
  };

  const handleOpen = (blueprint) => {
    setSelectedBlueprint(blueprint); // Establece el blueprint seleccionado para visualizar los detalles
  };

  return (
    <div>
      <h1>Buscar Blueprints</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del autor:
          <input type="text" value={author} onChange={handleInputChange} required />
        </label>
        <button type="submit">Buscar</button>
      </form>

      {submitted && blueprints.length > 0 && (
        <div>
          <h2>Blueprints de {author}</h2>
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

          {/* Campo para la suma total de puntos */}
          <div>
            <h3>Total de puntos: {totalPoints}</h3>
          </div>
        </div>
      )}

      {submitted && blueprints.length === 0 && (
        <div>No se encontraron blueprints para el autor: {author}</div>
      )}

      {/* Mostrar detalles del blueprint seleccionado */}
      {selectedBlueprint && (
        <div>
          <h3>Detalles del Blueprint: {selectedBlueprint.name}</h3>
          <div>
            {selectedBlueprint.points.map((point, pointIndex) => (
              <div key={pointIndex}>
                Punto: (x: {point.x}, y: {point.y})
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blueprints;