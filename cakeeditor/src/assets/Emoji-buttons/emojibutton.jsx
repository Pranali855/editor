import "./emojibutton.css";

function emojibutton({ emoji, setEmoji }) {
  return (
    <button className="emoji-btn" onClick={() => setEmoji(emoji)}>
      {emoji}
    </button>
  );
}

export default emojibutton;