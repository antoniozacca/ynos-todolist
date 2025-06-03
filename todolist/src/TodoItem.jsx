import {  useState} from "react";

function TodoItem({ elemento, onElimina, onModifica }) {
  // Stato per capire se siamo in modalità modifica
  const [isEditing, setIsEditing] = useState(false);

  // Stato per salvare temporaneamente il nuovo testo
  const [nuovoTesto, setNuovoTesto] = useState(elemento.testo);

  // Funzione chiamata quando si clicca "Salva"
  function salvaModifica() {
    // Controlla che il campo non sia vuoto
    if (nuovoTesto.trim() !== '') {
      onModifica(elemento.id, nuovoTesto.trim()); // Manda il nuovo testo al componente App
      setIsEditing(false); // Esce dalla modalità modifica
    }
  }

  // Funzione per annullare la modifica e tornare al testo originale
  function annullaModifica() {
    setNuovoTesto(elemento.testo); // Rimette il testo originale
    setIsEditing(false); // Esce dalla modifica
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* Se siamo in modifica, mostra l'input */}
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={nuovoTesto}
          onChange={(e) => setNuovoTesto(e.target.value)}
        />
      ) : (
        // Se non siamo in modifica, mostra solo il testo
        <span>{elemento.testo}</span>
      )}
      {/* Bottoni a destra */}
      <div className="btn-group ms-2">
        {/* Se stai modificando, mostra Salva e Annulla */}
        {isEditing ? (
          <>
            <button className="btn btn-success btn-sm" onClick={salvaModifica}>
              Salva
            </button>
            <button className="btn btn-secondary btn-sm" onClick={annullaModifica}>
              Annulla
            </button>
          </>
        ) : (
          // Se non stai modificando, mostra solo il bottone Modifica
          <button
            className="btn btn-warning btn-sm"
            onClick={() => setIsEditing(true)}
          >
            Modifica
          </button>
        )}

        {/* Bottone per eliminare sempre visibile */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onElimina(elemento.id)}
        >
          Elimina
        </button>
      </div>
    </li>
  );
}

export default TodoItem;