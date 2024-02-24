import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

{/* A box containing text and a link that an user can click to visit */}
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

{/* Contains objects with messages to display as popups */}
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Eduardo</span>👋
            <br />
            A Software Engineer from Mexico
        </h1>
    ),
    2: (
        <InfoBox
            text="Graduated from the university Tecnológico de Monterrey and picked up a passion for software development"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Worked in multiple successful projects over the years. Curious about
            the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few
            keystrokes away"
            link="/contact"
            btnText="Let's talk!"
        />
    )
}

{/* Render a text as a popup that will show in the homepage */}
const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo