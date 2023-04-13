import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
       
   <div className='gpt3__header-content'>
    <h1 className='gradient__text'>Hi There ! <br></br> Iam  Milan Ghimire <br></br> Web Developer and Software Engineer </h1>
    <p>I'm an Web Designer and Computer Engineering Student  with a clear mindset to master MERN Full Stack Developer.

Currently Studying at GSE-MU and as a Freelancer on Upwork

 Iam also a content creator on Youtube via I  help other learner through tutorials for big projects.
</p>
    <div className='gpt3__header-content__input'>

      <input type='email' placeholder='Your Email Address'/>
      <button type='submit'>Get Started</button>

    </div>
    <div className='gpt3__header-content__people'>
      <img src={people} alt='people' />
      <p>Hundreds of people and more had already hiered me and get satified by my projects</p>
    </div>
    
   </div>
   <div className='gpt3__header-image'>
    <img src={ai} alt='ai' />
   </div>
    

     </div>

  )
}

export default Header
