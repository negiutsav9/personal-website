import {React} from 'react';
import './Home.css'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

export default function Home(props){

    return (
        <div id='home'>

            <Navbar isHome={true}/>

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

                <div id='button_rows' class='row'>
                    <div class='col'>
                        <button>
                            <Link class="nav-link" to="/about">About</Link>
                        </button>
                    </div>
                    <div class='col'>
                        <button>
                            <Link class="nav-link" to="/projects">Project</Link>
                        </button>
                    </div>
                    <div class='col'>
                        <button>
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}