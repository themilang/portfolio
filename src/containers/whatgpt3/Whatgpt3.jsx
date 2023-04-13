import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About  me" text="My journey in the world of coding began when I was in +2 at Rehdon School & College, with A grade where I was first introduced to the subject. Since then, I've been deeply interested in programming and web development.

Currently, I'm pursuing my degree in computer engineering at Midwest University, where I'm expanding my knowledge of software engineering, data structures, algorithms, and other computer science concepts.

In addition, I'm also learning full-stack web development through a course offered by  Vrit Technologies in Sankhamul, Kathmandu. 
" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Technologies I've been working with </h1>
      <p>More</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="JavaScript" text=" Have a good understanding of the basics of JavaScript and its framework such as react , and serverside nextjs" />
      <Feature title="React" text=" Good knowledge of react and able to create reusable components  You may have experience using React hooks, such as useState and useEffect" />
      <Feature title="HTML" text="Good understanding of html 5 with lots of usefull components , anchor tags , form , list and many more " />
      <Feature title="CSS" text="advanced features such as flexbox, grid layout, and CSS variables. CSS to create visually appealing and responsive designs that adapt to different screen sizes and devices. " />
      <Feature title="Python" text=" strong understanding of Python fundamentals and experience building scalable applications using popular libraries such as NumPy, Pandas, and Flask , creating testing, and optimization  "/>
      <Feature title="Nextjs" text=" intermediate in using Next.js to build fast and efficient web applications. I have experience in creating server-side rendered React applications and optimizing performance using dynamic imports, code splitting, and static site generation." />
    </div>
  </div>
);

export default WhatGPT3;
