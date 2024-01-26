// import { useState } from "react";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

// import

const pendingJobs = [
  {
    id: 1,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 2,
    sorted: "Pending Sorted",
  },
  {
    id: 2,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 12,
    sorted: "Pending Sorted",
  },
  {
    id: 3,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 2,
    sorted: "Pending Sorted",
  },
  {
    id: 4,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 12,
    sorted: "Pending Sorted",
  },
  {
    id: 5,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 2,
    sorted: "Pending Sorted",
  },
  {
    id: 6,
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
    quantity: 12,
    sorted: "Pending Sorted",
  },
];
// const pendingJobs = [{ pending: "", id: Date.now() }];

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
    <form className="add-form">
      <h3>Write your pending work here</h3>
      <textarea placeholder="typing....." />

      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
}

function PendingJobList() {
  return (
    <div className="flashcards">
      {pendingJobs.map((pendingJob) => (
        <div key={pendingJob.id} className="flashcard">
          <p>{pendingJob.description}</p>
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
