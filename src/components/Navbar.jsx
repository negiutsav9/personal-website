import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    if(props.isHome){
        return (
            <div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid" >
                        <Link id="title" class="navbar-brand text-light" to="/">Un</Link>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div>
                <nav class="navbar navbar-expand-md">
                    <div class="container-fluid" >
                        <Link id="title" class="navbar-brand text-light" to="/">Un</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" style={{marginRight:0}}>
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
                            <div class="offcanvas-body" style={{marginLeft: 15}}>
                                <div class="navbar-nav flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <Link class="nav-link text-light" to="/about">About</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-light" to="/projects">Projects</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-light" to="/contact">Contact</Link>
                                    </li>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

