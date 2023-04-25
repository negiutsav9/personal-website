import React from 'react';
import Background from './Background';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import './About.css'

export default function About(props){
    return (
        <div>
            <div id='about-main'>
                <h3 class='display-4 text-light'>About</h3>
                <div class="line" style={{marginBottom:50}}/>
                <Background/>
                <Education/>
                <Experience/>
                <Skills/>
            </div>
        </div>
    )
}