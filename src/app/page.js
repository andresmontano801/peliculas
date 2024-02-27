"use client"
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import data from './components/data.json';
import styles from "./page.module.css";

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

  const addTodo = (selectedMovie, precio) => {
    setTodos([...todos, { id: todos.length + 1, nombre: selectedMovie, precio: precio, cantidad: 1 }]);
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
    <div className={styles.container}>
      <h1 className={styles.title}>Compra de Películas</h1>
      <Form addTodo={addTodo} data={data} />
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} updateQuantity={updateQuantity} />
        ))}
      </div>
      <div className={styles.total}>Total a pagar: ${total.toFixed(2)}</div>
    </div>
  );
};

export default App;



