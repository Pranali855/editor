import { useState } from "react";
import EmojiButton from "./EmojiButton/EmojiButton";
import ColorButton from "./ColorButton/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("😁");
  const [bgColor, setBgcolor] = useState("#eef3ff");

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">

      {/* Blue radial glow bg */}
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

      <div className="emoji-box"
        style={{ backgroundColor: bgColor }}
      >
        {emoji}
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