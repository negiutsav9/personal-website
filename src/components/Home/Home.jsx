import {React} from 'react';
import './Home.css'

export default function Home(props){

    return (
        <div id='home'>
            <div id='intro' class="container-fluid text-light">
                <div class="row row-cols-1 row-cols-lg-2">
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
                            <span class='display-6' style={{fontSize:30, }}>My topic of interests are</span>
                            <ul id="interests">
                                <li id='interest'>Cloud Computing</li>
                                <li id='interest'>Data Analysis</li>
                                <li id='interest'>Machine Learning</li>
                                <li id='interest'>Mobile Development</li>
                                <li id='interest'>Web Development</li>
                                <li id='interest'>Software Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}