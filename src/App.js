// import { useState } from "react";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function App() {
  const [pendingFlashCards, setPendingFlashCards] = useState([]);
  function handleAddPendings(pendingFlashCard) {
    setPendingFlashCards((pendingFlashCards) => [
      ...pendingFlashCards,
      pendingFlashCard,
    ]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddPendings={handleAddPendings} />
      <PendingJobList pendingFlashCards={pendingFlashCards} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h2>🧬Medical Pending FlashCards🦠</h2>;
}

function Form({ onAddPendings }) {
  const [pendingContent, setPendingContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!pendingContent) return;

    const newPending = { pendingContent, sorted: false, id: Date.now() };

    onAddPendings(newPending);
    setPendingContent("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Write your pending work here</h3>
      <textarea
        placeholder="typing....."
        value={pendingContent}
        onChange={(e) => setPendingContent(e.target.value)}
      />

      <button
        // type="submit"
        className="submit-btn"
      >
        Add
      </button>
    </form>
  );
}

function PendingJobList({ pendingFlashCards }) {
  return (
    <div className="flashcards">
      {pendingFlashCards.map((pendingJob) => (
        <div key={pendingJob.id} className="flashcard">
          <p>{newPending.pendingContent}</p>
          <span className="flashcard-extras">
            <button className="trash-btn">
              <FaRegTrashAlt />
            </button>

            <button className="edit-btn">
              <FaPencilAlt />
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X pendings on your handover log, and you've sorted X (X%)
      </em>
    </footer>
  );
}
