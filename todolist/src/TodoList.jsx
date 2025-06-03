import TodoItem from './TodoItem';

function TodoList({ lista, onElimina }) {
  return (
    <ul className="list-group">
        {/* itero su tutti i todo */}
      {lista.map((todo) => (
        //assegno una chiave unica per ciascun todo e passo il todo alla funzione onelimina
        <TodoItem key={todo.id} elemento={todo} onElimina={onElimina} />
      ))}
    </ul>
  );
}

export default TodoList;