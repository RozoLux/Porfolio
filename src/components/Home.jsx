import React from 'react';
import '../Styles/Home.css';
import profileImage from '../assets/images/profile.jpg'

const Home = () => { 
    return (
        <div className="home-container"> 
            <div className="home">    
                <header className="greetings"> 
                    <div>Hey, I'm Johann LEVERT </div>              
                </header>
                <div className='job'>SOFTWARE DEVELOPER, Full stack</div>
                <p className="description"> 
                    Transforming ideas into tangible realities fuels my passion. Now calling Toronto my home, my journey began in the vibrant streets of Paris. After a fulfilling chapter in the insurance industry, I've pivoted to where my true passions lie: technology and design. My curiosity doesn't stop there—I'm an avid traveler, soccer enthusiast, and automotive aficionado. Life, to me, is about continuous learning and discovery, embracing every opportunity to explore new horizons. 
                </p>
                {/*<img src={profileImage} alt='Profile' className='profile-image'/>*/}
            </div>
        </div>       
    );
}

export default Home;