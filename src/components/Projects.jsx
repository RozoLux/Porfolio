import React from 'react';
import '../Styles/Projects.css';
import AppFit from '../assets/projects/FitApp.png'
import ExpensesTracker from '../assets/projects/ExpensesTracker.png';




function Projects () {
    return (
        <div className="projects-container">
            <div className="project-box">
                <p className="project-description">
                    <div>
                        Full Stack Expenses Tracker
                    </div>
                    <div> <br /></div>
                    Developed a comprehensive application for tracking personal finances, showcasing my abilities in React, Node, and MongoDB.
                </p>
                <img src={ExpensesTracker} alt="ExpensesTracker" className="project-image"/>
                <div className="project-footer">
                    <a href="https://github.com/RozoLux/expense_tracker" className="project-link">View Project</a>
                </div>                
            </div>

            <div className="project-box">
                <p className="project-description">
                    <div>
                        IA Health Fit App
                    </div>
                    <div> <br /></div>
                     Created an innovative app that personalizes fitness plans using AI algorithms, demonstrating my skills in Python and machine learning.
                </p>
                <img src={AppFit} alt="AppFit" className="project-image"/>
                <div className="project-footer">
                    <a href="https://github.com/RozoLux/HealthFitApp" className="project-link">View Project</a>
                </div>                
            </div>
        </div>
    );
}

export default Projects;