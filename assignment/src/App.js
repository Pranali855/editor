import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;