import React from 'react';
import "./Projects.css";
import icon_android from './assets/icon_android.png'
import icon_java from './assets/icon_java.png'
import ff_icon from './assets/app_logo2.png'
import tf_icon from "./assets/icon_tf.png"
import icon_python from "./assets/icon_python.png"
import mask_img from "./assets/face_mask.png"
import pt_icon from "./assets/icon_pytorch.png"
import vae_img from "./assets/vae.png"
import mastml_icon from "./assets/mastml_icon.png"
import rac_bg from "./assets/rac.jpg"
import st_icon from "./assets/icon_streamlit.png"
import b3_bg from "./assets/b3_bg.png"
import docker_icon from "./assets/icon_docker.png"
import react_icon from "./assets/icon_react.png"
import b2_bg from "./assets/b2_bg.png"

export default function Projects(){
    return (
        <div id='main'>
            <h3 class='display-4 text-light'>Projects</h3>
            <div class="line" style={{marginBottom:50}}/>
            <div id='projects_div' class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                <div id='project_div' class='col'>
                    <div id="project" class='card text-light'>
                        <img class="card-img-top" src={ff_icon} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Fuel Finder</h2>
                            <p class="card-text">An app to show fuel prices of nearby fuel stations and to allow users to create logs to keep track of their fuel expenses.</p>
                            <div id='app_used'>
                                <img src={icon_android} alt=""/>
                                <img src={icon_java} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card text-light'>
                        <img class="card-img-top" src={mask_img} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Face Mask Detection</h2>
                            <p class="card-text">A machine learning model that uses convolutional neural networks and transfer learning to detect face mask over a given face.</p>
                            <div id='app_used'>
                                <img src={tf_icon} alt="" style={{marginLeft:10}}/>
                                <img src={icon_python} alt="" style={{marginLeft:15}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card text-light'>
                        <img class="card-img-top" src={vae_img} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Variational Autoencoder</h2>
                            <p class="card-text">A machine learning model that uses neural nets to encode an image to its latent Gaussian state and then decodes it using a distribution sample.</p>
                            <div id='app_used'>
                                <img src={pt_icon} alt="" style={{marginLeft:10}}/>
                                <img src={icon_python} alt="" style={{marginLeft:15}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card text-light'>
                        <img class="card-img-top" src={rac_bg} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Prediction of Recycled Aggregate Concrete Properties</h2>
                            <p class="card-text">A set of regression models to predict the properties of recycled aggregate concrete under axisymmetric triaxial load and true triaxial load. These models are then uploaded to a cloud foundry service.</p>
                            <div id='app_used'>
                                <img src={mastml_icon} alt="" style={{marginLeft:-30}}/>
                                <img src={icon_python} alt="" style={{marginLeft:15}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card text-light'>
                        <img class="card-img-top" src={b3_bg} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Bundle Automation Tool v3</h2>
                            <p class="card-text">The third iteration of bundle automation tool which is used to create report summaries of changes that are being migrated to the Human Resource System by uploading audit results from Phire and processing the uploaded data through Jira API.</p>
                            <div id='app_used'>
                                <img src={st_icon} alt="" style={{marginLeft:-30}}/>
                                <img src={icon_python} alt="" style={{marginLeft:15}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                <div id="project" class='card text-light'>
                        <img class="card-img-top" src={b2_bg} alt="Card cap" style={{height:200, overflow:'hidden'}}/>
                        <div class="card-body">
                            <h2 class="card-title">Bundle Automation Tool v2</h2>
                            <p class="card-text">The second iteration of bundle automation tool which is used to create report summaries of changes that are being migrated to the Human Resource System by uploading audit results from Phire and processing the uploaded data through Jira API.</p>
                            <div id='app_used'>
                                <img src={docker_icon} alt="" style={{marginLeft:-75}}/>
                                <img src={react_icon} alt="" style={{marginLeft:15}}/>
                                <img src={icon_python} alt="" style={{marginLeft:15}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card'>
                        Project 1
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card'>
                        Project 1
                    </div>
                </div>
                <div id='project_div' class='col text-light'>
                    <div id="project" class='card'>
                        Project 1
                    </div>
                </div>
            </div>
        </div>
    )
}