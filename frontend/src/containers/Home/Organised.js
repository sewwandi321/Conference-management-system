import React from 'react';
import './organised.css';
import CardItem from './CardItem';

function Organaised() {
  return (
    <div className='cards'>
      <h1>ORGANISED BY</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

        <div className="organised-image">
          <img src="https://www.sliit.lk/wp-content/uploads/2017/09/sliit-logo.png" style={{height: '150px'}} />

          <img src="https://mercon.uom.lk/images/IEEE_logo.png" style={{height: '60px'}} />
        </div>
          
          {/*<ul className='cards__items'>

             <CardItem
              src='https://www.sliit.lk/wp-content/uploads/2017/09/sliit-logo.png'
              text='SLIIT'
              // label='Beauty'
              path='/services'
            />
            <CardItem
              src='https://mercon.uom.lk/images/IEEE_logo.png'
              text='IEEE'
              // label='Kitchen items'
              path='/products' 
            />
           
          </ul>*/}
        </div>
      </div>
    </div>
  );
}

export default Organaised;