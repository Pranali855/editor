import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'

const root = createRoot(document.getElementById('root'));
const path = window.location.pathname;
console.log(path);

if(path === "/"){
    root.render(<Home />);
} else if (path == "/About"){
    root.render(<About />);
} else if (path == "/Contact"){
    root.render(<Contact />);
} else {
    root.render(<h1>Error</h1>);
}