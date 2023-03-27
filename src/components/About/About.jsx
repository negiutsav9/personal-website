import React from 'react';
import Navbar from '../Navbar';

export default function About(props){
    return (
        <div>
            <Navbar color={props.color} active={true}/>
            This is the start of the journey
        </div>
    )
}