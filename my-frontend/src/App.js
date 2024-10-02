
import React, { useState } from 'react';
import { getBlueprintsByAuthor } from './services/Api'; // Aquí importamos nuestra llamada al backend
import Blueprints from './Page/Blueprints';
 
function App() {
    return (
      <div className="App">
        <Blueprints />
      </div>
    );
  
}
 
export default App;