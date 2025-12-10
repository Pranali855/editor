
import { StrictMode} from 'react'
import { createRoot} from 'react-dom/client'

const root = createRoot (document.getElementById('root'));
const path = window.locaction.pathname;
console.log(path);
if(path == "/"){
    root.render(<home/>);
}else if (path == "/about"){  
    root.render (<about/>);
}else if (path == "/contact"){
     root.render (<contact/>);
}else{
    root.render(<h1>Error</h1>)
}