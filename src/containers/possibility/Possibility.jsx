import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
    <a href='mailto:ghimiremilan.gn@gmail.com'> <h4>Request Early Schedule to Get Started</h4> </a>
      <h1 className="gradient__text">Why Me <br /> </h1>
      <p> web developer with a passion for problem-solving and a commitment to delivering high-quality applications ,  strong technical skills in  JavaScript, React, HTML, CSS, Python, and Next.js,  confident on what  I  build that is efficient and scalable web applications that meet your needs.  Let's work together to create amazing web applications that exceed your expectations!se</p>
      <a href='mailto:ghimiremilan.gn@gmail.com'> <h4>Request Early Schedule to Get Started</h4></a>
    </div>
  </div>
);

export default Possibility;
