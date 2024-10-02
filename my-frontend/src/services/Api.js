import axios from 'axios';
 
// Define la URL base de tu backend Spring Boot
const API_URL = 'http://localhost:8080/api';
 
// Ejemplo de una función para obtener los blueprints de un autor
export const getBlueprintsByAuthor = async (author) => {
  try {
    const response = await axios.get(`${API_URL}/blueprints/${author}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blueprints:", error);
    return null;
  }
};