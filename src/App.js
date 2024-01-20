import { useState } from "react";

const pendingJobs = [
  { id: 1, description: "Passports", quantity: 2, sorted: "Pending Sorted" },
  { id: 2, description: "Socks", quantity: 12, sorted: "Pending Sorted" },
  { id: 3, description: "Passports", quantity: 2, sorted: "Pending Sorted" },
  { id: 4, description: "Socks", quantity: 12, sorted: "Pending Sorted" },
  { id: 5, description: "Passports", quantity: 2, sorted: "Pending Sorted" },
  { id: 6, description: "Socks", quantity: 12, sorted: "Pending Sorted" },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <TextArea />
      <PendingJobList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h2>🧬Medical Pending FlashCards🦠</h2>;
}

function TextArea() {
  return (
    <div className="add-form">
      <h3>Write your pending work here</h3>
      <textarea />
      <button>Add</button>
    </div>
  );
}

function PendingJobList() {
  const [isDoneId, setIsDoneId] = useState(null);

  function handlePendingJobDone(id) {
    setIsDoneId(id !== isDoneId ? id : null);
  }

  return (
    <div className="flashcards">
      {pendingJobs.map((pendingJob) => (
        <div
          key={pendingJob.id}
          onClick={() => handlePendingJobDone(pendingJob.id)}
          className={pendingJob.id === isDoneId ? "isDone" : ""}
        >
          <p>
            {pendingJob.id === isDoneId
              ? pendingJob.sorted
              : pendingJob.description}
          </p>
          <span className="card-features">
            <button className="pencil-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </button>
            <button className="trash-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

// function PendingJobFlashCard({ pendingJob }) {
//   return (
//     <>
//       <div className="flashcard">
//         <span>
//           {pendingJob.description}
//           {pendingJob.quantity}
//         </span>
//       </div>
//       <div className="card-features">

//       </div>
//     </>
//   );

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X pendings on your handover log, and you've sorted X (X%)
      </em>
    </footer>
  );
}
