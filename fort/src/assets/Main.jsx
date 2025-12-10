import "./Main.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 style={{ color: "white", textAlign: "center" }}>
        {props.title}
      </h1>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="range" className="card-image" />
      <div className="container">
        <h3 style={{ textAlign: "center" }}>
          <b>{props.heading}</b>
        </h3>
        <p>{props.subheading}</p>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <div className="footer">
      <p>{props.text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar title="Mountain Ranges of India" />

      <div className="card-container">
        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/3/3c/Himalaya_Mountains.jpg"
          heading="Himalayas"
          subheading="The youngest and tallest mountain range in the world."
        />

        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/8/87/Aravali_Range_India.jpg"
          heading="Aravalli Range"
          subheading="One of the oldest fold mountains in the world."
        />

        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/4/4f/Vindhya_range.jpg"
          heading="Vindhya Range"
          subheading="Separates northern India from southern India."
        />
      </div>

      <Footer text="© 2024 Mountain Ranges of India." />
    </div>
  );
}

export default App;
