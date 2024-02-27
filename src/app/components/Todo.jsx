import React from 'react';
import styles from '../page.module.css'; // Importa tus estilos CSS

const Todo = ({ todo, removeTodo, updateQuantity }) => {
  const handleChangeQuantity = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateQuantity(todo.id, value);
    }
  };

  return (
    <div className={styles.todoItem}> {/* Agrega la clase para el contenedor de la tarea */}
      <div className={styles.todoInfo}> {/* Agrega la clase para el contenedor de información */}
        <div className={styles.bold}>
          <span>{todo.nombre}</span>
          <span> - ${todo.precio.toFixed(2)}</span>
        </div>
        <div className={styles.todoControls}> {/* Agrega la clase para el contenedor de controles */}
          <input type="number" value={todo.cantidad} onChange={handleChangeQuantity} className={styles.inputNumber} />
          <button className={styles.deleteButton} onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

