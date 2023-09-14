import React, { useState, useEffect } from 'react';
import profpic from '../Assets/profpic.jpg';
import menuicon from '../Assets/menuicon.png';
import '../Styles/About.css';

function About() {
  return (
    <div className="about-parent">
      <div className="left-menu">
        <img src={menuicon} style={{
          width: 50,
          height: 50
        }}/>
      </div>
      <div className="welcome-content">
        <div className="about-text">
          <h1>About Me:</h1>
          <p>Hi, I'm Mena! I'm a 13 year old student and aspiring software
            developer. This is my first fully-hosted React project, and I'm
            looking forward to continue building more! I want to refine my
            skills as a developer to explore my future as a UI/UX web
            designer and ultimately as a builder who can contribute
            meaningfully to the world even beyond programmers. One of my
            near-term goals would be to design and build out an
            application to empower everyone - including middle schoolers -
            to understand the power of investing (even a little bit at a time).
            I decided to create Course Search because I thought it would
            be a helpful tool to students and it helps to create a deeper
            understanding of each course. </p>
            <h2>Link to all of my past projects:</h2>
          <h3>https://github.com/menaparikh/menadev</h3>
        </div>
        <img src={profpic} style={{
          width: 100,
          height: 100
        }}/>
      </div>
    </div>
  );
}
// how will the viewer be able to tell that course search is the main project we want them to look at

export default About;