import {React, useEffect, useState} from 'react';
import './Home.css'
import Navbar from '../Navbar';
import photo from './photo.png'

export default function Home(props){


    return (
        <div id='home'>
            <Navbar color={props.color}/>
            <div id='intro' class="container-fluid text-light">
                <div class="row row-cols-1 row-cols-md-2">
                    <div id='img_column' class="col-lg-6 text-center">
                        <div id='pic'/>
                    </div>
                    <div id='intro_body' class="col-lg-6">
                        <div id="intro_div" class="container text- flex">
                            <div class="display-3 text-light">
                                Utsav Negi
                            </div>
                            <h6 id="sub_intro" class="display-6">
                                Aspiring Software Developer and Machine Learning Engineer
                            </h6>
                            <ul class="display-6" style={{paddingTop: 30}}>
                                <li id='interest'>Software Development</li>
                                <li id='interest'>Web Development</li>
                                <li id='interest'>Mobile Development</li>
                                <li id='interest'>Machine Learning</li>
                                <li id='interest'>Cloud Computing</li>
                                <li id='interest'>Quantum Theory</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}