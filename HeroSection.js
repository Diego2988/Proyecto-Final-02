
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import React, {useState} from 'react';

function HeroSection() {
 
  const [data, setData]=useState(null)
  const [printlog, setPrintlog]=useState(false)


  function getData(val) {
      setData(val.target.value)
      
      console.log(val.target.value)
  }
  
  
  return (
    <div className='hero-container'>
       
      
      <h1>Ahorra mas, compra mas</h1>
      <input type="text" className='Input_search' onChange={getData}/>
      
      <div className='hero-btns'>


        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={()=>setPrintlog(true)}
        >
          BUSCA LAS OFERTAS
        </Button>
        
      </div>
       
    </div>
  );
}

export default HeroSection;
