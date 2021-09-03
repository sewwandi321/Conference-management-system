import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Venues() {
  return (
    <div className='cards'>
      <h1>VENUES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='https://www.sliit.lk/wp-content/uploads/2017/12/sliit-information-technology-malabe-campus.png'
              text='SLIIT Malabe'
            
              path='/services'
            />
            <CardItem
              src='https://www.nagroup.lk/wp-content/uploads/2018/05/DSC_0509-1024x768.jpg'
              text='Engineering Faculty'
              
              path='/products'
            />
            <CardItem
              src='https://tse3.mm.bing.net/th?id=OIP.sRJGoN8Qt57HX8_2vTFCqwHaFA&pid=Api&P=0&w=250&h=170'
              text="Business Faculty"
              
              path='/sign-up'
            />
            <CardItem
              src='https://www.nagroup.lk/wp-content/uploads/2018/05/IMG_3837--1024x683.jpg'
              text="IT Faculty"
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Venues;