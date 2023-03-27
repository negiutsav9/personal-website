import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from "./components/Projects/Projects"
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Contact from './components/Contacts/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/projects" element={<Projects/>}/>
           <Route path ="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
