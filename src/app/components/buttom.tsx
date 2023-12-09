// AddFoxButton.js

type ClickHandler = () => void;

export default function AddFoxButton({ onClick }: { onClick: ClickHandler }) {
  return (
    <button onClick={onClick}>
      Add new Fox
    </button>
  );
}
 