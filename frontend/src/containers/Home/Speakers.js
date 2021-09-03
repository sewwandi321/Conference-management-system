import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Speakers() {
  return (
    <div className='cards'>
      <h1>KEY NOTE SPEAKERS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='https://tse1.mm.bing.net/th?id=OIP.O0R3Og68szi5PshHKAyBNQAAAA&pid=Api&P=0&w=300&h=300'
              text=''
              
              path='/'
            />
            <CardItem
              src='https://tse1.mm.bing.net/th?id=OIP.O0R3Og68szi5PshHKAyBNQAAAA&pid=Api&P=0&w=300&h=300'
              text=''
              
              path='/'
            />
            <CardItem
              src='https://tse1.mm.bing.net/th?id=OIP.O0R3Og68szi5PshHKAyBNQAAAA&pid=Api&P=0&w=300&h=300'
              text=""
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Speakers;