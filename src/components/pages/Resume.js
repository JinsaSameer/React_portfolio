import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import resume from '../../assets/resume.pdf';
export default function Resume() {
    return (
      <div>
        <Header />
        <div className="content">
          <h2 id="h2">Resume</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="resume" id="r1" src={resume} alt="pdf of resume"></img>
                
              </div>
              </div>
              </div>
              </div>
              <Footer />
              </div>
              );
              }
              