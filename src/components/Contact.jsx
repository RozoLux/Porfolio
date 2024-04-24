import React from 'react';
import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Contact () {
    return (
        <div className="contact">
        <h1>Please find my contact below</h1>
        <FontAwesomeIcon icon={faEnvelope} /> yohannl@hotmail.com <br/>
        <div><br/></div>
        <FontAwesomeIcon icon={faPhone} /> <span role="img" aria-label="Canadian Flag">🇨🇦</span> +1 438 926 0577 <br/>
        <div><br/></div>
        <FontAwesomeIcon icon={faPhone} /> <span role="img" aria-label="French Flag">🇫🇷</span> +33 6 68 80 87 53 <br/>
        <div><br/></div>
        <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/johann-levert">LinkedIn Profile</a> johann-levert <br/>
        <div><br/></div>
        <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/rozolux">GitHub Profile</a>  RozoLux
        </div>
    );
}

export default Contact;