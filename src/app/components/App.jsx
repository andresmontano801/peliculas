import React, { useState, useEffect } from 'react';
import Form from './Form';
import Todo from './Todo';
import data from './data.json';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    todos.forEach(todo => {
      sum += todo.precio * todo.cantidad;
    });
    setTotal(sum);
  }, [todos]);

  const addTodo = (selectedMovie) => {
    const movie = data.find(movie => movie.nombre === selectedMovie);
    setTodos([...todos, { id: todos.length + 1, ...movie, cantidad: 1 }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateQuantity = (id, quantity) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, cantidad: parseInt(quantity) };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Lista de Compras de Películas</h1>
      <Form addTodo={addTodo} data={data} />
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} updateQuantity={updateQuantity} />
        ))}
      </div>
      <div>Total a pagar: ${total.toFixed(2)}</div>
    </div>
  );
};

export default App;