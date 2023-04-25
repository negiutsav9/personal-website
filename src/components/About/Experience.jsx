import React from 'react';

export default function Experience(){
    return (
        <div id='content' class='container-fluid text-light'>
            <h3 class='display-6'>Experience</h3>
            <div class="line-1"/>

            <div id='exp_div' class="row row-cols-1 row-cols-lg-2">
                <div id='logo' class="col-lg-4" style={{paddingLeft:12 ,paddingTop:15, paddingBottom:15}}>
                    <div id='logo_1'/>
                </div>
                <div class="col-lg-6" style={{paddingLeft:12 ,paddingTop:10}}>
                    <a href="https://skunkworks.engr.wisc.edu/">
                        <div id='name'>
                            <strong>Infomatics Skunkworks</strong>
                        </div>
                    </a>
                    <div id='type'><br/><strong>Title:</strong> Undergraduate Research Assistant</div>
                    <div id='type'><br/><strong>Type:</strong> Research</div>
                    <div id='type'><br/><strong>Duration:</strong> September 2022 - Present</div>
                    <div id='type'><br/><strong>Description:</strong></div>
                    <ul style={{paddingTop: 30, fontSize:10}}>
                        <li id='descriptionRow'>Assist <a href='https://directory.engr.wisc.edu/mse/faculty/morgan_dane'> Professor Dane Morgan</a> in his project on Machine learning techniques for accelerating materials analysis and discovery.</li>
                        <li id='descriptionRow'>Develop machine learning models based on material analysis using <a href='https://github.com/uw-cmg/MAST-ML'> MAterials Simulation Toolkit for Machine Learning (MAST-ML)</a> library.</li>
                        <li id='descriptionRow'>Upload the machine learning model to a cloud foundry instance which handles preprocessing, model weights and returns prediction for given inputs.</li>
                    </ul>
                </div>
            </div>

            <div id='exp_div' class="row row-cols-1 row-cols-lg-2">
                <div class="col-lg-4">
                    <div id='logo_2'/>
                </div>
                <div class="col-lg-6" style={{paddingLeft:12 ,paddingTop:15}}>
                    <a href="https://it.wisc.edu">
                        <div id='name'>
                            <strong>Division of Information Technology</strong>
                        </div>
                    </a>
                    <div id='type'><br/><strong>Title:</strong> EBS-ERP Application Support Team Lead</div>
                    <div id='type'><br/><strong>Type:</strong> Student Job</div>
                    <div id='type'><br/><strong>Duration:</strong> September 2021 - Present</div>
                    <div id='type'><br/><strong>Description:</strong></div>
                    <ul style={{paddingTop: 30, fontSize:10}}>
                        <li id='descriptionRow'>Conduct regression testing in a quality assurance HR testing environment and report errors to the development team.</li>
                        <li id='descriptionRow'>Update master regression testing scripts based on HRS updates as well as to handle end-cases.</li>
                        <li id='descriptionRow'>Create routine bundle list documentation to summarize the changes migrated into the HRS.</li>
                        <li id='descriptionRow'>Developed two versions of automation tool to generate bundle list documentation using Phire audit results.</li>
                        <li id='descriptionRow'>Mentor onboarding students in field of software regression testing in the HR system.</li>
                        <li id='descriptionRow'>Assign responsibilities to the team based on the requirements and demands.</li>
                    </ul>
                </div>
            </div>

            <div id='exp_div' class="row row-cols-1 row-cols-lg-2">
                <div class="col-lg-4">
                    <div id='logo_3'/>
                </div>
                <div class="col-lg-6" style={{paddingLeft:12 ,paddingTop:15}}>
                    <a href="https://ssec.wisc.edu">
                        <div id='name'>
                            <strong>Space Science and Engineering Center</strong>
                        </div>
                    </a>
                    <div id='type'><br/><strong>Title:</strong> Software Research Intern</div>
                    <div id='type'><br/><strong>Type:</strong> Internship</div>
                    <div id='type'><br/><strong>Duration:</strong> May 2022 - September 2022</div>
                    <div id='type'><br/><strong>Description:</strong></div>
                    <ul style={{paddingTop: 30, fontSize:10}}>
                        <li id='descriptionRow'>Collaborated with researcher Chris Schmidt working on Wildfire Automated Biomass Burning Algorithm.</li>
                        <li id='descriptionRow'>Developed a square tile generator which generates 256 by 256 vector tiles of the entire planet.</li>
                        <li id='descriptionRow'>Built a custom tile generator which creates a scaled map based on given dimension and coordinates.</li>
                        <li id='descriptionRow'>Implemented a tile server to deploy the generated vector tiles on a web page.</li>
                        <li id='descriptionRow'>Containerized the generators with a PostgreSQL container containing OSM Database using Docker.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}