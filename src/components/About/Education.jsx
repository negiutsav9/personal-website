import React from 'react';
import './About.css'

export default function Education(){
    return (
        <div id='content' class='container-fluid text-light'>
            <h3 class='display-6'>Education</h3>
            <div class="line-1"/>
            
            <div id='school_1' class="row row-cols-1 row-cols-md-2">
                
                    <div class="col-lg-4">
                        <div id='logo_uw'/>
                    </div>
                    <div class="col-lg-6" style={{paddingLeft:12 ,paddingTop:15}}>
                        <a href="https://www.wisc.edu">
                        <div id='name'><strong>University of Wisconsin-Madison</strong></div>
                        </a>
                        <div id='type'><br/><strong>Year:</strong> 2019-2023</div>
                        <div id='type'><br/><strong>Degree:</strong> Bachelor of Science</div>
                        <div id='type'><br/><strong>Majors:</strong> Computer Engineering and Computer Science</div>
                    </div>
                
            </div>
        </div>
    )
}