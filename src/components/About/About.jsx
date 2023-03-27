import React from 'react';
import Navbar from '../Navbar';
import Background from './Background';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import './About.css'

export default function About(props){
    return (
        <div id='about-main'>
            <Navbar/>
            <Background/>
            <Education/>
            <Work/>
            <Skills/>
        </div>
    )
}