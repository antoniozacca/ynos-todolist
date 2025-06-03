import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  //inizializzo todos come un'array vuoto
  const [todos, setTodos] = useState([]);
  //creo un nuovo oggetto todo con id unico e un testo 
  function aggiungiTodo(testo) {
    const nuovoTodo = {
      id: Date.now(),
      testo: testo
    };
    //lo aggiungo all'inizio dell'array todos
    setTodos([nuovoTodo, ...todos]);
  }
    //elimino un todo filtrando per il suo id
  function eliminaTodo(id) {
    const nuovaLista = todos.filter((todo) => todo.id !== id);
    setTodos(nuovaLista);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista delle cose da fare</h1>
      {/* includo il componente todoform e passo la funzione todo come prop */}
      <TodoForm onAggiungi={aggiungiTodo} />
      {/* includo il componente todolist e passo l'array todos e la funzione di eliminatodo */}
      <TodoList lista={todos} onElimina={eliminaTodo} />
    </div>
  );
}

export default App;