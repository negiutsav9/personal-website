import React from 'react';
import Navbar from '../Navbar';

export default function Contact(props){
    return (
        <div>
            <Navbar color={props.color} active={true}/>
            Contact
        </div>
    )
}