import React from 'react';
import './Brief.css'

export default function Brief(){
    return (
        <div>
            <div id='brief' class='text-center'>
                <p>As an inquisitive person, I love to learn new concepts and theories, specifically in the field of computer sciences and machine learning. Starting this journey to learn something new about computer sciences, I learnt about object-oriented programming, algorithms, operating systems, software scalability, mobile development, digital systems and web development and applied these ideas by building programs through programming languages such as C, C++, Java, Verilog, JavaScript and Python.</p>
                <p>While learning these concepts,. I started to learn more about artificial intelligence and machine learning as more businesses and research are applying its theories to increase their productivity. Subsequently, I studied regression modelling, probabilistic modelling, artificial neural networks and AI-algorithms such as Minimax and A* Search. Using these notions, I created machine learning models using Scikit-Learn, TensorFlow and PyTorch.</p>
                <p>With such acquired knowledge and experience, I am open to collaborate with new and unique ideas.</p>
            </div>
        
            <div class="container px-4 text-center text-light">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 gx-5 gy-4">
                    <div class="col">
                        <div id="option_journey" class="p-5">
                            Journey
                        </div>
                    </div>
                    <div id="option_projects" class="col">
                        <div class="p-5 bg-danger">
                            Projects
                        </div>
                    </div>
                    <div id="option_project" class="col">
                        <div class="p-5 bg-danger">
                            Blogs
                        </div>
                    </div>
                    <div id="option_contact" class="col">
                        <div class="p-5 bg-danger">
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}