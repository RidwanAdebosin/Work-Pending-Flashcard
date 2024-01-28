// import { useState } from "react";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function App() {
  const [pendingFlashCards, setPendingFlashCards] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  function handleAddPendings(pendingFlashCard) {
    setPendingFlashCards((pendingFlashCards) => [
      ...pendingFlashCards,
      pendingFlashCard,
    ]);
  }
  function handleDeletePending(id) {
    setPendingFlashCards((pendingFlashCards) =>
      pendingFlashCards.filter((pendingJob) => pendingJob.id !== id)
    );
  }

  // function handleEditPendingJob(id) {
  //   const updatedPendings = pendingFlashCards.map((pending) =>
  //     pending.id === pendingJob.id
  //       ? { ...pending, pendingContent: e.target.value }
  //       : pending
  //   );
  //   setPendingFlashCards(updatedPendings);

  //   setIsEditing((id = isEditing ? null : id));
  // }

  return (
    <div className="app">
      <Logo />
      <Form onAddPendings={handleAddPendings} />
      <PendingJobList
        setPendingFlashCards={setPendingFlashCards}
        pendingFlashCards={pendingFlashCards}
        onDeletePendingJob={handleDeletePending}
        // onEditPendingJob={handleEditPendingJob}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
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

    const newPending = { pendingContent, sorted: true, id: Date.now() };

    onAddPendings(newPending);

    setPendingContent("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Write your pending work here</h3>
      <textarea
        placeholder="write your pending jobs here for your colleague to see....."
        value={pendingContent}
        onChange={(e) => setPendingContent(e.target.value)}
      />

      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
}

function PendingJobList({
  pendingFlashCards,
  onDeletePendingJob,
  onEditPendingJob,
}) {
  return (
    <div className="flashcards">
      {pendingFlashCards.map((pendingJob) => (
        <Pendings
          pendingJob={pendingJob}
          key={pendingJob.id}
          onDeletePendingJob={onDeletePendingJob}
          onEditPendingJob={onEditPendingJob}
        />
      ))}
    </div>
  );
}

function Pendings({ pendingJob, onDeletePendingJob, onEditPendingJob }) {
  const [sortedId, setSortedId] = useState(null);

  function handleSorted(id) {
    setSortedId(id !== sortedId ? id : null);
  }

  return (
    <main className="flashcard">
      <div
        key={pendingJob.id}
        onClick={() => handleSorted(pendingJob.id)}
        className={pendingJob.id === sortedId ? "sorted" : ""}
      >
        {/* {pendingJob.pendingContent} */}

        {pendingJob.id === sortedId
          ? pendingJob.sorted
          : pendingJob.pendingContent}
        <span className="flashcard-extras">
          <button
            className="trash-btn"
            onClick={() => onDeletePendingJob(pendingJob.id)}
          >
            <FaRegTrashAlt />
          </button>
          <button
            className="edit-btn"
            onClick={() => onEditPendingJob(pendingJob.id)}
          >
            <FaPencilAlt />
          </button>
        </span>
      </div>
    </main>
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
