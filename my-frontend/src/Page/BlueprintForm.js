import React from 'react';

const BlueprintForm = ({ author, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del autor:
        <input type="text" value={author} onChange={handleInputChange} required />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BlueprintForm;
