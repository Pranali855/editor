import "./App.css";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#34495e",
    padding: "15px",
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Mountain Ranges of India
      </h1>
    </div>
  );
}

function Card({ image, heading, subheading }) {
  return (
    <div className="card">
      <img src={image} alt="range" className="card-image" />
      <div className="container">
        <h4 style={{ textAlign: "center", color: "black" }}>
          <b>{heading}</b>
        </h4>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  };

  return (
    <div className="footer" style={footerStyle}>
      <p>© 2024 Mountain Ranges of India. All rights reserved.</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="cards-wrapper">
        <Card
          image="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
          heading="Himalayas"
          subheading="The highest mountain range in India, extending across northern states."
        />

        <Card
          image="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg"
          heading="Western Ghats"
          subheading="A UNESCO World Heritage site along the western coast."
        />

        <Card
          image="https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg"
          heading="Eastern Ghats"
          subheading="A discontinuous range along the eastern coast of India."
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
