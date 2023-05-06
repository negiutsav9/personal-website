import React from 'react';
import './Contact.css'
import resume_icon from "./assets/resume_icon.png"
import github_icon from "./assets/github_icon.png"
import linkedin_icon from "./assets/linkedin_icon.png"
import { useForm, ValidationError } from '@formspree/react';


export default function Contact(){

    let showSuccess = false;

    const successDiv = () => {
        if (showSuccess){
            showSuccess = false;
            document.getElementById("form").reset();
            return (
                <div id="confirmation" class="text-light" style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35, paddingTop:50}}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2  130.2" style={{width:100, height:100, marginRight:10}}>
                        <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                        <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>
                    <span>Thanks for reaching out</span>
                </div>
            )
        }
    }

    const [state, handleSubmit] = useForm("mwkjywye");

    if (state.succeeded) {
        showSuccess = true;
    } else {
        showSuccess = false;
    }


    return (
        <div id='main'>
            <h3 class='display-4 text-light'>Contact</h3>
            <div class="line" style={{marginBottom:25}}/>
            <div class="row row-cols-1 row-cols-lg-2">
                <div class="col col-lg-6">
                    <form id="form" onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="InputName" class="form-label text-light">Name</label>
                            <input class="form-control text-light" id="name" name="name" type="text"/>
                        </div>
                        <div class="mb-3">
                            <label for="InputEmail" class="form-label text-light">Your Email address</label>
                            <input  class="form-control text-light" id="email" name="email" type="email" aria-describedby="emailHelp"/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <div class="mb-3">
                            <label for="InputSubject" class="form-label text-light">Subject</label>
                            <input class="form-control text-light" id="subject" type="text" name="subject"/>
                            <ValidationError prefix="Subject" field="subject" errors={state.errors}/>
                        </div>
                        <div class="mb-3">
                            <label for="InputMessage" class="form-label text-light">Message</label>
                            <textarea class="form-control text-light" rows = "7" id="message" name="message"/>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>
                        <button type="submit" id="submitButton" disabled={state.submitting}>Submit</button>
                    </form>
                </div>
                <div class="col col-lg-6">
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                        <button id="resumeButton">
                            <img id='resume_icon' src={resume_icon} alt=''/>
                            View my Resume
                        </button>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/unegi/' style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                            <button id="linkedinButton">
                                <img id='linkedin_icon' src={linkedin_icon} alt=''/>
                                Connect me on LinkedIn
                            </button>
                        </a>
                    </div>
                    <div >
                        <a href='https://github.com/negiutsav9' style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                            <button id="githubButton">
                                <img id='github_icon' src={github_icon} alt=''/>
                                Follow me on Github
                            </button>
                        </a>
                    </div>
                    {successDiv()}
                </div>
            </div>
        </div>
    )
}