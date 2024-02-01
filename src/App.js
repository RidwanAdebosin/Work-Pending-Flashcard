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

  function handleToggleItem(id) {
    setPendingFlashCards((pendingFlashCards) =>
      pendingFlashCards.map((pendingJob) =>
        pendingJob.id === id
          ? { ...pendingJob, sortedStatus: !pendingJob.sortedStatus }
          : pendingJob
      )
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
        onToggleItems={handleToggleItem}
      />
      <Stats pendingFlashCards={pendingFlashCards} />
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

    const newPending = {
      pendingContent,
      sortedStatus: "Pending Sorted",
      id: Date.now(),
    };

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
  onToggleItems,
}) {
  return (
    <div className="flashcards">
      {pendingFlashCards.map((pendingJob) => (
        <Pendings
          pendingJob={pendingJob}
          key={pendingJob.id}
          onDeletePendingJob={onDeletePendingJob}
          onEditPendingJob={onEditPendingJob}
          onToggleItems={onToggleItems}
        />
      ))}
    </div>
  );
}

function Pendings({ pendingJob, onDeletePendingJob, onEditPendingJob }) {
  const [sortedId, setSortedId] = useState(false);

  function handleSorted(id) {
    setSortedId(id !== sortedId ? id : null);
  }

  return (
    <article className="flashcard">
      <div
        key={pendingJob.id}
        onClick={() => handleSorted(pendingJob.id)}
        style={pendingJob.id === sortedId ? { backgroundColor: "green" } : {}}
      >
        <p>
          {pendingJob.id === sortedId
            ? pendingJob.sortedStatus
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
        </p>
      </div>
    </article>
  );
}

function Stats({ pendingFlashCards }) {
  const numPendingFlashCards = pendingFlashCards.length;
  const numSortedPendingFlashCards = pendingFlashCards.filter(
    (pendingJob) => pendingJob.sortedStatus
  ).length;
  const percentage = Math.round(
    (numSortedPendingFlashCards / numPendingFlashCards) * 100
  );

  return (
    <footer className="stats">
      <em>
        You have {numPendingFlashCards} pendings on your handover log, and
        you've sorted {numSortedPendingFlashCards} ({percentage}%).
      </em>
    </footer>
  );
}
