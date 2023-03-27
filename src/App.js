import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from "./components/Projects/Projects"
import Blogs from "./components/Blogs/Blogs"
import {BrowserRouter, Routes, Navigate, Route} from 'react-router-dom' 
import Contact from './components/Contacts/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home color="#3d1090"/>}/>
           <Route path="/about" element={<About color="purple"/>}/>
           <Route path="/projects" element={<Projects color="skyblue"/>}/>
           <Route path="/blogs" element={<Blogs color="green"/>}/>
           <Route path ="/contact" element={<Contact color="orange"/>}/>
        </Routes>

      </BrowserRouter>  
    </div>
  );
}

export default App;
