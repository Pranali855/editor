import { useState } from "react";
import "./App.css";
import EmojiButton from "./EmojiButton/emojibutton";
import ColorButton from "./colorbutton/colorbutton";

function App() {
  const [emoji, setEmoji] = useState("😊");
  const [bgColor, setBgcolor] = useState("#eee5eaff");
  const [sliderValue, setSliderValue] = useState(50);
  const [angle, setAngle] = useState(0);
  const [size, setSize] = useState(100);

  return (
   <div
  className="min-h-screen w-full relative"
  style={{
    background: `
      radial-gradient(ellipse 95% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
      radial-gradient(ellipse 85% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
      radial-gradient(ellipse 80% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
      radial-gradient(ellipse 80% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
      linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
 >
        <h3 className="head">Playing with Emoji Editor</h3>
        <p className="desc">This is the emoji editor using useState.</p>

        {/* Emoji box */}
        <div
          className="emoji-box"
          style={{
            backgroundColor: bgColor,
            fontSize: `${size}px`,
            transform: `rotate(${angle}deg)`,
          }}
        >
          {emoji}
        </div>
        <div className="control-section">
          <input
            type="range"
            min="50"
            max="200"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="slider"
          />
        </div>

        {/* Emoji buttons */}
        <div className="emoji-pic">
          <EmojiButton emoji="😇" setEmoji={setEmoji} />
          <EmojiButton emoji="🥰" setEmoji={setEmoji} />
          <EmojiButton emoji="🤗" setEmoji={setEmoji} />
          <EmojiButton emoji="😴" setEmoji={setEmoji} />
          <EmojiButton emoji="😀" setEmoji={setEmoji} />
          <EmojiButton emoji="🥳" setEmoji={setEmoji} />
          <EmojiButton emoji="😎" setEmoji={setEmoji} />
          <EmojiButton emoji="☺️" setEmoji={setEmoji} />
        </div>

        {/* Color picker */}
        <div className="color-picker">
          <ColorButton bgColor="#5aace6ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#7270e0ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#a071ccff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#e65adaff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#60314bff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#e7e09eff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#d18267ff" setBgcolor={setBgcolor} />
          <ColorButton bgColor="#96efb7bc" setBgcolor={setBgcolor} />
        </div>


      </div>
  );
}

export default App;
