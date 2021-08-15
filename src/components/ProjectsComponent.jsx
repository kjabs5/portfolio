import React from 'react'
import project1 from '../images/prj1.jpeg';
import project2 from '../images/prj2.jpeg';
import project3 from '../images/prj3.jpeg';

function ProjectsComponent() {
    return (
        <div>
            <section id="projects"  className="projects">
                <div  className="section-title">Projects</div>
                <div  className="projects-list container">
                    <div  className="pro-task-list">
                        <div  className="pro-img">
                            <img src={project1} alt="" />
                        </div>
                        <div  className="info">
                            <h2  className="info-title">Not To Do List</h2>
                            <small  className="tech">Tech: html, css, javascript</small>
                            <div  className="links">
                                <a href="">
                                    <i  className="fab fa-github-square"></i>
                                </a>
                                <a href="">
                                    <i  className="fab fa-chrome"></i>
                                </a>
                            </div>
                            <p>About: This project will help you manage your time Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tenetur possimus. Dolor, dolorum ut?

                            </p>
                        </div>
                    </div>
                    <div  className="pro-task-list">

                        <div  className="info">
                            <h2  className="info-title">Project 2</h2>
                            <small  className="tech">Tech: html, css, javascript</small>
                            <div  className="links">
                                <a href="">
                                    <i  className="fab fa-github-square"></i>
                                </a>
                                <a href="">
                                    <i  className="fab fa-chrome"></i>
                                </a>
                            </div>
                            <p>About: This project will help you manage your time Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tenetur possimus. Dolor, dolorum ut?

                            </p>
                        </div>
                        <div  className="pro-img">
                            <img src={project2} alt="proj2 image" />
                        </div>
                    </div>
                    <div  className="pro-task-list">
                        <div  className="pro-img">
                            <img src={project3} alt="proj 3 image" />
                        </div>
                        <div  className="info">
                            <h2  className="info-title">Project 3</h2>
                            <small  className="tech">Tech: html, css, javascript</small>
                            <div  className="links">
                                <a href="">
                                    <i  className="fab fa-github-square"></i>
                                </a>
                                <a href="">
                                    <i  className="fab fa-chrome"></i>
                                </a>
                            </div>
                            <p>About: This project will help you manage your time Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tenetur possimus. Dolor, dolorum ut?

                            </p>
                        </div>
                    </div>
                </div>
            </section>

                </div >
                )
}

export default ProjectsComponent
