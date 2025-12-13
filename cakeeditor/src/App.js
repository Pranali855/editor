import { useState } from "react";
import "./App.css";
import EmojiButton from "./assets/emojibutton";
import ColorButton from "./colorbutton/colorbutton";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [bgColor, setBgcolor] = useState("#eee5eaff");
  const [slidervalue, setSlidervalue] = useState(50);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
          `,
        }}
      >
        <h3 className="head">playing with emoj editor</h3>

        <div
          className="emoj-box"
          style={{
            backgroundColor: bgColor,
            fontSize: `${slidervalue}px`,
          }}
        >
          {emoji}
        </div>

        <div className="slider-container">
          <p>Size: {slidervalue}px</p>
          <input
            type="range"
            min="20"
            max="150"
            value={slidervalue}
            className="slider"
            onChange={(e) => setSlidervalue(e.target.value)}
          />
        </div>

        {/* Emoji Buttons */}
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

        {/* Color Picker */}
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
    </div>
  );
}

export default Home;
