import React from 'react';
import '../Styles/About.css';
import resume from '../assets/resume/Johann Levert Software Developer.docx'

function About () {
    return (
        <div className="boxes-container">

            <div className="quote-box">
                <h3>Summary</h3>
                <p>
                {/* Summary*/}
                Welcome!

                I’m Johann Levert, a Full Stack Developer with a rich background in the insurance sector. After achieving numerous milestones in insurance, I am now channeling my analytical prowess and problem-solving skills into the world of software development. With a solid foundation in data analysis, process optimization, and relationship management, I'm eager to contribute to and grow alongside an innovative IT team. My commitment to continuous learning drives my journey forward, as I actively enhance my expertise in programming languages, systems administration, and cybersecurity.
                </p>

            </div>

            <div className="quote-box">
                <h3>My journey</h3>
                <p > 
                {/* **Journey from Insurance to Information Technology** */}

                My career in insurance honed my analytical skills, understanding of complex processes, and the ability to maintain client relationships under pressure. These experiences laid a strong foundation for my transition into software development, where I bring a unique perspective to data analysis and process optimization. <br />

                My venture into Full Stack Web and Mobile Development, alongside Backend and DevOps, has been marked by rigorous training and hands-on projects that have prepared me to tackle challenges in the tech industry head-on.
                    
                </p>

            </div>
                        

         
            <div className="quote-box">
                <h3>My Skills</h3>
                <p>
                    <a href={resume} class="resume-link">View Full My Resume</a><br />
                    <div> <br /> </div>
                    {/* SKills */}
                    Education and Technical Expertise : <br />        
                    - Full Stack Web and Mobile Web Development, NUCAMP (October 2022 - April 2023) <br />
                    - Back End, SQL, and DevOps with Python, NUCAMP (August 2023 - December 2023) <br />
                    <div> <br /></div>

                    Technical Skills : <br />
                    - Proficient in: HTML, CSS, JavaScript, Python, C++, SQL, React/React Native, Redux, Node, Express, MongoDB. <br />
                    - Experienced with cloud services (AWS, Google Cloud, and Microsoft Azure). <br />
                    - Tools: Figma for UI/UX design.

                </p>

            </div>

           

          
        </div>
    );
}

export default About;