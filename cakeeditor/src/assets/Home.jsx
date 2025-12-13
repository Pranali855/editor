import { useState } from "react";
import EmojiButton from "./EmojiButton/EmojiButton";
import ColorButton from "./ColorButton/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("😁");
  const [bgColor, setBgcolor] = useState("#eef3ff");
  const [slidervalue, setSlidervalue] = useState(50);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)",
        }}
      ></div>

      <div className="head">
        <h3>playing with emoji editor</h3>
      </div>

      <div
        className="emoji-box"
        style={{
          fontSize: `${slidervalue}px`,
        }}
      >
        {emoji}
      </div>

      <div className="slider-container">
        {slidervalue}
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          onChange={(e) => {
            setSlidervalue(e.target.value);
          }}
        />
      </div>

      <div className="emoji-pick">
        <EmojiButton emoji="😁" setEmoji={setEmoji} />
        <EmojiButton emoji="😎" setEmoji={setEmoji} />
        <EmojiButton emoji="🤩" setEmoji={setEmoji} />
        <EmojiButton emoji="🥳" setEmoji={setEmoji} />
        <EmojiButton emoji="😇" setEmoji={setEmoji} />
        <EmojiButton emoji="😍" setEmoji={setEmoji} />
      </div>

      <div className="color-picker">
        <ColorButton bgColor="#b5aeff" setBgcolor={setBgcolor} />
        <ColorButton bgColor="#c7cbff" setBgcolor={setBgcolor} />
        <ColorButton bgColor="#e7dfff" setBgcolor={setBgcolor} />
        <ColorButton bgColor="#fee4ff" setBgcolor={setBgcolor} />
        <ColorButton bgColor="#ffe6f7" setBgcolor={setBgcolor} />
        <ColorButton bgColor="#96e7bc" setBgcolor={setBgcolor} />
      </div>
    </div>
  );
}

export default Home;
