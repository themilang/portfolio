import React from 'react';
import{ Footer, Blog, Header,Features,Whatgpt3,Possibility } from './containers';
import{ Cta,Navbar,Brand} from './components';
import './App.css';
import './index.css';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
           <Navbar />
           <Header />

        </div>
       
        <Whatgpt3 />
        <Cta />
        <Possibility />
        <Brand />
        <Features/>
       
        
        <Blog />
        <Footer />


    </div>
  )
}

export default App
