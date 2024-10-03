import React, { useState } from 'react';
import axios from 'axios';
import './Blueprints.css';
import BlueprintForm from './BlueprintForm'; // Importa el formulario
import BlueprintTable from './BlueprintTable'; // Importa la tabla
import BlueprintDetails from './BlueprintDetails'; // Importa los detalles

const API_URL = 'http://localhost:8080/api';

const Blueprints = () => {
  const [blueprints, setBlueprints] = useState([]);
  const [author, setAuthor] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  const handleInputChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    try {
      const response = await axios.get(`${API_URL}/blueprints/${author}`);
      setBlueprints(response.data);

      const total = response.data.reduce((sum, blueprint) => sum + blueprint.points.length, 0);
      setTotalPoints(total);
    } catch (error) {
      console.error("Error fetching blueprints:", error);
    }
  };

  const handleOpen = (blueprint) => {
    setSelectedBlueprint(blueprint);
  };

  return (
    <div>
      <h1>Buscar Blueprints</h1>
      <BlueprintForm author={author} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

      {submitted && blueprints.length > 0 && (
        <div>
          <h2>Blueprints de {author}</h2>
          <BlueprintTable blueprints={blueprints} handleOpen={handleOpen} />

          <div>
            <h3>Total de puntos: {totalPoints}</h3>
          </div>
        </div>
      )}

      {submitted && blueprints.length === 0 && (
        <div>No se encontraron blueprints para el autor: {author}</div>
      )}

      {selectedBlueprint && <BlueprintDetails selectedBlueprint={selectedBlueprint} />}
    </div>
  );
};

export default Blueprints;
