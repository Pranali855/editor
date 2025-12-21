import "./colorbutton.css";

function colorbutton({ bgColor, setBgcolor }) {
  return (
    <button
      className="color-btn"
      style={{ backgroundColor: bgColor }}
      onClick={() => setBgcolor(bgColor)}
    ></button>
  );
}

export default colorbutton;
