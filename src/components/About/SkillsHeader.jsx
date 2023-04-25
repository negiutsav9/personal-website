import React from 'react';
import './About.css'

export default function SkillsHeader(props){
    return(
        <>
        <div id='header' style={{display: 'flex'}}>
            <div id='icon'>
                <img id='skill_img' src={props.icon} alt=""/>
            </div>
            <div id='skill_name' style={{fontSize:28}}>
                {props.name}
            </div>
        </div>
        <div class="line-1"/>
        </>
    )
}