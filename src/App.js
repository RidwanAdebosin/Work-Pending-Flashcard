export default function App() {
  return (
    <div className="app">
      <Logo />
      <TextArea />
      <PendingFlashCards />
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
    </div>
  );
}

function PendingFlashCards() {
  return <div className="list">FLASHCARDS</div>;
}

function PendingList() {}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have X pendings on your handover log, and you've sorted X (X%)
      </em>
    </footer>
  );
}
