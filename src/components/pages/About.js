import React from 'react';
import '../../styles/Header.css';
import Header from '../Header';
import Footer from '../Footer';
import photo from '../../assets/photo.png';



export default function About() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">About me</h2>
        <img className="image" src={photo} alt="image" width="140"></img>
        <div className="abt">
          <p>I am hardworking and i love coding.</p>
          <p>My background is Computer Science and noew I am doing Full stack developer course at UCSD</p>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}