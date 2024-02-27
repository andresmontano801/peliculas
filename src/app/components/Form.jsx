import React, { useState } from 'react';

const Form = ({ addTodo, data }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  
  const handleAddTodo = () => {
    if (selectedMovie !== '') {
      const movie = data.find(movie => movie.nombre === selectedMovie);
      addTodo(selectedMovie, movie.precio); // Pasamos el precio como segundo argumento
      setSelectedMovie('');
    }
  };

  return (
    <div>
      <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
        <option value="">Seleccione una película</option>
        {data.map((movie, index) => (
          <option key={index} value={movie.nombre}>{movie.nombre} - ${movie.precio.toFixed(2)}</option>
        ))}
      </select>
      <button onClick={handleAddTodo}>Agregar</button>
    </div>
  );
};

export default Form;

