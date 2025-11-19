import "./Main.css";

// Navbar Component
function Navbar() {
  return (
    <div className="navbar">
      <h1 style={{ color: "white", textAlign: "center" }}>
        Mountain Ranges of India
      </h1>
    </div>
  );
}

// Card Component
function Card({ image, heading, subheading }) {
  return (
    <div className="card">
      <img src={image} alt="range" className="card-image" />
      <div className="container">
        <h3 style={{ textAlign: "center" }}><b>{heading}</b></h3>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="footer">
      <p>© 2024 Mountain Ranges of India. All rights reserved.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">

      <Navbar />

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

      <Footer />

    </div>
  );
}

export default Main;
