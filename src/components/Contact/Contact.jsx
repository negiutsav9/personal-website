import React from 'react';
import './Contact.css'

export default function Contact(){
    return (
        <div id='main'>
            <h3 class='display-4 text-light'>Contact</h3>
            <div class="line" style={{marginBottom:25}}/>
            <div class="row row-cols-1 row-cols-lg-2">
                <div class="col col-lg-7">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-light">Name</label>
                            <input type="text" class="form-control text-light" id="inputName"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-light">Your Email address</label>
                            <input type="email" class="form-control text-light" id="inputEmail" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-light">Subject</label>
                            <input type="text" class="form-control text-light" id="inputSubject"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-light">Message</label>
                            <textarea class="form-control text-light" rows = "7" id="inputMessage"/>
                        </div>
                        <button type="submit" id="submitButton">Submit</button>
                    </form>
                </div>
                <div class="col col-lg-5">
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                        <button id="resumeButton">View my Resume</button>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                        <button id="linkedinButton">Connect me on LinkedIn</button>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:35}}>
                        <button id="githubButton">Follow me on Github</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}