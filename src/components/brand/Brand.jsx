import React from 'react';
import './brand.css';
import { google,shopify,slack,dropbox,atlassian } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding '>
      <div>
      <img src={google} alt='brand' /> 
      </div>
      <div>
        <img src={dropbox} alt='brand' />
      </div>
      <div>
        <img src={shopify} alt='brand' />
      </div>
      <div>
        <img src={slack} alt='brand' />
      </div>
      <div>
        <img src={atlassian} alt='brand' />
      </div>
      
    </div>
  )
}

export default Brand
