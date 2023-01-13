import { Link } from 'react-router-dom';
import React from 'react';

export interface AboutProps {
    text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default About;