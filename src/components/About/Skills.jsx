import React from 'react';
import SkillsHeader from './SkillsHeader';
import icon_ai from './assets/icon_ai.png'
import icon_software from './assets/icon_software.png'
import icon_systems from './assets/icon_systems.png'
import icon_web from './assets/icon_web.png'
import icon_cloud from './assets/icon_cloud.png'
import icon_mobile from './assets/icon_mobile.png'

export default function Skills(){
    return (
        <div id='content' class='container-fluid text-light'>
            <h3 class='display-6'>Skills</h3>
            <div class="line-1"/>
                <div id='skill_div' class="row row-cols-1 row-cols-lg-2">
                    <div id='skill' class='col'>
                        <SkillsHeader name='Software' icon={icon_software}/>
                        <ul>
                            <li>Object-Oriented Programming</li>
                            <li>Functional Programming</li>
                            <li>Programming Languages: Java, Python, C++, C</li>
                            <li>Development Methodologies: Agile, Waterfall</li>
                            <li>Data Structures: Arrays, Maps, Trees, Graph</li>
                            <li>Algorithms: Recursion, Divide & Conquer, Greedy, Dynamic Programming</li>
                            <li>Regression and Unit Testing</li>
                            <li>APIs</li>
                            <li>Containerization Technologies: Docker, Kubernetes</li>
                        </ul>
                    </div>
                    <div  id='skill' class='col'>
                        <SkillsHeader name='Systems' icon={icon_systems}/>
                        <ul>
                            <li>Operating Systems</li>
                            <li>Assembly Language</li>
                            <li>Database Systems: SQL</li>
                            <li>Digital System Design and Synthesis</li>
                            <li>Computer Architecture and Processor Design</li>
                            <li>Hardware Description Language: System Verilog</li>
                        </ul>
                    </div>
                    <div  id='skill' class='col'>
                        <SkillsHeader name='Machine Learning' icon={icon_ai}/>
                        <ul>
                            <li>Data Analysis</li>
                            <li>Signal Processing</li>
                            <li>Machine Learning</li>
                            <li>AI/ML Algorithms: Minimax, A* Search</li>
                            <li>Unsupervised Learning: Clustering, Dimensionality Reduction</li>
                            <li>Supervised Learning: Decision Trees, Regression, Support Vector Machines, k-NN</li>
                            <li>Machine Learning Pipelining</li>
                            <li>Neural Networks: Convolutional and Deep Neural Nets, Encoders, Decoders, Computer Vision</li>
                            <li>Probabilistic Models</li>
                        </ul>
                    </div>
                    <div  id='skill' class='col'>
                        <SkillsHeader name='Web Development' icon={icon_web}/>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React/Next.js</li>
                            <li>Node.js</li>
                            <li>Svelte</li>
                        </ul>
                    </div>
                    <div  id='skill' class='col'>
                        <SkillsHeader name='Cloud Computing' icon={icon_cloud}/>
                        <ul>
                            <li>Cloud Deployment</li>
                            <li>Google Cloud Platform</li>
                            <li>IBM Watson</li>
                            <li>Amazon Web Services: SageMaker, EC2, S3</li>
                        </ul>
                    </div>
                    <div  id='skill' class='col'>
                        <SkillsHeader name='Mobile Development' icon={icon_mobile}/>
                        <ul>
                            <li>Swift for iOS</li>
                            <li>Java for Android</li>
                            <li>React Native</li>
                            <li>Flutter</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}