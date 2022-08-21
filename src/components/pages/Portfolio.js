import React from 'react';
import '../../styles/Header.css';
import Footer from '../Footer';
import Header from '../Header';
import Project from '../Project';

import p1 from '../../assets/image1.jpg';
import p2 from '../../assets/image2.jpg';
import p3 from '../../assets/image3.jpg';
import p4 from '../../assets/image4.jpg';
//import p5 from '../../assets/image5.jpg';
import project1 from '../../assets/image6.png';
//import project2 from '../assets/image7.jpg;'
export default function Portfolio() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2 id="h2">Portfolio</h2>
          <div className="container" style={{paddingTop: '10px'}}>
            <div className="row">
              <Project
                key = "1"
                img = {p1}  
                imgAlt = "My_Note taker"
                project = "https://mynote-takerapp.herokuapp.com/"
                projectAlt = "note_taker"
                projectTitle = "My_Note_taker"
                gitHubRepo = "https://github.com/JinsaSameer/My_Note-taker"
                gitHubAlt = "See my repository on GitHub"
                description = "Using this application we can write notes for our important activities.Technologies Used JavaScript NodeJs ExpressJs " />
                
                <Project
                 key = "2"
              img = {p2}  
              imgAlt = "Password Generator"
              project = "https://jinsasameer.github.io/passwordgenerator/"
              projectAlt = "password Generator"
              projectTitle = "Password Generator"
              gitHubRepo = " https://github.com/JinsaSameer/passwordgenerator"
              gitHubAlt = "See app repository on GitHub"
              description = "Using this application we can generates random passwords.Technologies used :JavaScript,HTML,CSS" />
          </div> 

          <div className="row">
            <Project
              key = "3"
              img = {p3}  
              imgAlt = "Day Planner"
              project = "https://jinsasameer.github.io/Work-day-scheduler/"
              projectAlt = "Day planner"
              projectTitle = "Day Planner"
              gitHubRepo = "https://github.com/JinsaSameer/Work-day-scheduler"
              gitHubAlt = "See repository on GitHub"
              description = "Workday Scheduler helps to schedule task of each day from 9am to 5pm.An employee can add specific events to this scheduler.Technologies used: JavaScript,HTML,CSS" />

            <Project
              key = "4"
              img = {p4}  
              imgAlt = "Regular Expression"
              project = "https://gist.github.com/JinsaSameer/bf4c28c9fdf13e880925d32cac3a111a"
              projectAlt = "Tutorial explaining a specific regex"
              projectTitle = "Regex Tutorial"
              gitHubRepo = "https://gist.github.com/JinsaSameer/bf4c28c9fdf13e880925d32cac3a111a"
              gitHubAlt = "See Regex Tutorial on GitHub"
              description = "This Gist document explains how to validate email passwords." />
              </div>

              <div className="row">
            <Project
              key = "5"
              img = {project1}  
              imgAlt = "Project1"
              project = "https://github.com/JinsaSameer/Price-Search"
              projectAlt = "Price Compare"
              projectTitle = "Price Compare"
              gitHubRepo = "https://jinsasameer.github.io/Price-Search/"
              gitHubAlt = "See repository on GitHub"
              description = "This application will quickly grab the results you need from the world's largest retailers and deliver pricing information on the top products from these companies. The team utilized their full-stack skills and knowledge to build a price comparison web application from scratch. The goal was to solve a real-world problem by integrating data received from multiple server-side API requests.Technologies used:Server-side APIs, HTML,CSS,jQuery, Bootstrap"/>
              
              </div>
            </div>
         </div>
    <Footer />
 </div>
 );
}
             
              
              

              

              
