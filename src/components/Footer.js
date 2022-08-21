import React from 'react';
//import '../styles/Footerr.css';
import gitHublogo from '../assets/github.png';
import linkedInlogo from '../assets/linkedin.png';
import gmaillogo from '../assets/gmail.jpg';

export default function Footer() {
    return (
      <div className="footer">
        <a href="https://github.com/jinsasameer" alt="Link to GitHub account"><img className="icon" src={gitHublogo} alt="Link to GitHub account" width="90"></img></a>
        <a href="https://www.linkedin.com/in/jinsasameer/" alt="Link to LinkedIn"><img className="icon" src={linkedInlogo} alt="LinkedIn account" width="150"></img></a>
        <a href="mailto:jinsajaleel@gmail.com" alt="Link to email"><img className="icon" src={gmaillogo} alt="Email Jinsa" width="90"></img></a>
        </div>
    );
  }

