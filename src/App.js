import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from "./components/Projects/Projects"
import Contact from './components/Contact/Contact.jsx'
import {useRef} from "react";

function App() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProject = useRef(null);
  const refContact = useRef(null);

  return (
    <div className="App">
      <div>
        <nav id='navbar' class="navbar fixed-top navbar-expand">
          <div class="container-fluid" >
            <button onClick={()=>refHome.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}> 
              <span id="title" class="navbar-brand text-light">Un</span>
            </button> 
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" style={{marginRight:20}}>
              <span class="line"></span> 
              <span class="line"></span> 
              <span class="line"></span>
            </button>
            <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel" style={{background:"#006999f3"}}>
              <div class="offcanvas-header">
                <h5 class="offcanvas-title text-light" id="offcanvasDarkNavbarLabel">Un</h5>
                <h5 class="offcanvas-title text-light display-4" style={{marginLeft:25}}>Utsav Negi</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body" style={{marginLeft: 20}}>
                <div class="navbar-nav flex-grow-1 pe-3">
                  <li id='links' class="nav-item text-light">
                    <button onClick={()=>refAbout.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}> About </button> 
                  </li>
                  <li id='links' class="nav-item text-light">
                    <button onClick={()=>refProject.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Projects </button> 
                  </li>
                  <li id='links' class="nav-item text-light">
                    <button onClick={()=>refContact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}> Contact </button> 
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id='scrollDivHome' ref={refHome}/>
      <Home/>
      <div id='scrollDivHome' ref={refAbout}/>
      <About/>
      <div id='scrollDivHome' ref={refProject}/>
      <Projects/>
      <div id='scrollDivHome' ref={refContact}/>
      <Contact/>
    </div>
  );
}

export default App;
