import "./stringToBullets.css";

function StringToBullets({ text }) {
  const sentences = text
    .split(". ")
    .filter((sentence) => sentence.trim().length > 0);

  return (
    <ul>
      {sentences.map((sentence, index) => (
        <li key={index} className="bullet-text-style">
          {sentence.trim()}
        </li>
      ))}
    </ul>
  );
}

export default StringToBullets;
