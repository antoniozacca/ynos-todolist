import { useState } from 'react';

function TodoForm({ onAggiungi }) {
  const [testoInput, setTestoInput] = useState(''); //inizializzo lo stato testoimput come stringa vuota

  function gestisciSubmit(event) {
    event.preventDefault();

    if (testoInput.trim() === '') {
      return; // Non fare nulla se il campo è vuoto
    }

    onAggiungi(testoInput);
    setTestoInput(''); // Svuoto il campo dopo l'aggiunta
  }

  return (
    <form onSubmit={gestisciSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Scrivi un nuovo task..."
        value={testoInput}
        onChange={(event) => setTestoInput(event.target.value)}
      />
      <button className="btn btn-success" type="submit">Aggiungi</button>
    </form>
  );
}

export default TodoForm;