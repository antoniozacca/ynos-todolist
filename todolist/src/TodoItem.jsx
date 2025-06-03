function TodoItem({ elemento, onElimina }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {elemento.testo}
      <button
        className="btn btn-danger btn-sm"
        //al click del pulsante chiamacla funzione onelimina passando l'id da eliminare
        onClick={() => onElimina(elemento.id)}
      >
        Elimina
      </button>
    </li>
  );
}

export default TodoItem;