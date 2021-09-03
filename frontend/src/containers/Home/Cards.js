import React from 'react';
import { useEffect, useState } from "react";
import './Cards.css';
import CardItem from './CardItem';
import Conferences from "../../components/Conferences/Conferences";
import "./conference.css";
import axios from "axios";
import { useLocation } from "react-router";

function Cards() {
  const [conference, setConference] = useState([]);


    useEffect(() => {
        function getConference() {
            axios.get("http://localhost:8065/api/conference/getconference").then((res) => {
                setConference(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getConference();
    }, [])
  return (
    <div className='cards'>
      <h1>LATEST CONFERENCES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <>

        <div className="home">
        <div className="card-contain" style={{ marginLeft: 40, marginBottom: 40 }}>
        <div className="card-cont">
        <div className="card-contain" style={{ marginLeft: 40, marginBottom: 40 }}>
        {conference.filter((p)=>p.status == "approved").map((conference, index) => (


<div className="card-cont">

                <div className="card-tit">
                    <h3>{conference.title}</h3>
                </div>
                
                    <div className="card-cont">
                        <div className="card-nam">
                          <label>Date:</label>
                            <h8>{conference.date}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{conference.time}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{conference.venue}</h8>
                        </div>
                        <div className="card-cont">
                        <div className="card-nam">
                            <h8>{conference.conductor}</h8>
                        </div>
                        
                        
                   
                        
                        </div>
                        </div>

                        
                        </div>
                    
                    </div>
                </div>




        ))}
               
                  
                  
</div>
       
        </div>
            
        </div>
        </div>
        </>
        
      
            
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;