import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./WorkshopCard";
import Layout from '../../components/Layout';
//grid


// import Card from './components/ReaserchPaper/Card';



function WorkshopList() {

    const [workshops, setWorkshops] = useState([]);


    useEffect(() => {
        function getWorkshops() {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
    
            console.log('user token'+config);

            axios.get( 
                'http://localhost:8065/api/workshops',
                config
              ).then((res) => {
                setWorkshops(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getWorkshops();
    }, [])
    //

    return (
        <Layout>
               <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Workshops</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
            
        <div className='ConferenceList'>
            

         
        <div class="Conlist">
            <div class="container">
            
                <div class="row">
               
                    <div class="col">
                   <br></br>
                   
                        <div class="row">
                   
                          {workshops.filter((p)=>p.status == "approved").map((workshops, index) => (

                                <Card
                                    topic={workshops.topic}
                                    description={workshops.description}
                                    name={workshops.date}
                                    email={workshops.email}
                                    
                                    
                                    // link= {papers.researchpaper[0].fil}
                                    link ={ "http://localhost:8065/uploads/"+workshops.worshopproposol[0].fil}
                                    workshopProposal={workshops.worshopproposol[0].fil}
                                   
                                />
                                

                            ))}
                              </div> 
                            </div>
                        </div>
                    </div>
             </div>
             </div>
             </Layout>
    )

}

export default WorkshopList;