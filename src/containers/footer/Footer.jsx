import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer' section-padding >
      <div className='gpt3__footer-heading'>
    <h1 className='gradient__text'>Do you want to create somthing amazing  than other</h1>      
    </div>
    <div className='gpt3__footer-btn'>
      <p ><a href="mailto:ghimiremilan.gn@gmail.com">Request Early Schedule </a></p>
      

    </div>
     <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <a href='#'><img src={logo} alt='logo'/> </a>
        <p > portfolio website by Milan Ghimire. All rights reserved.</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4> Social links </h4>
        <p><a href="https://github.com/themilang">  Github </a></p>
        <p><a href="https://www.instagram.com/themilang/">Instagram </a> </p>
        <p> <a href="https://www.twitter.com/themilang/">Twitter </a></p>
        <p><a href="https://github.com/themilang">Linked</a></p>
        
      </div>
      <div className='gpt3__footer-links_div'>
        <h4> Site </h4>
        <p>Terms and Condition </p>
        <p>Privacy and Policy  </p>
        <p>Contact </p>
    
        
      </div>
      <div className='gpt3__footer-links_div'>
        <h4> Get in touch </h4>
        <p>PO-Box:---- </p>
        <p>+977-9847790661 </p>
        <p> ghimiremilan.gn@gmail.com </p>
      
        
      </div>

    

     </div>
     <div className='gpt3__footer-copyright'>
        <p>© 2023 Milan Ghimire. All rights reserved.</p>

      </div>
    </div>
  )
}

export default Footer
