import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./updateconferencecard";
import Layout from '../Layout';
//grid


// import Card from './components/ReaserchPaper/Card';



function UpdateConference() {

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
    //

    return (
        <Layout>
        <div className='ConferenceList'>
           

        <div class="Conlist">

            <div class="container">
            
                <div class="row">
               
                    <div class="col">
                   <br></br>
                   
                        <div class="row">
                        {/* .filter((p)=>p.status == "approved") */}
                          {conference.filter((p)=>p.status == "approved").map((conference, index) => (

                                <Card
                                    title={conference.title}
                                    description={conference.description}
                                    date={conference.date}
                                    time={conference.time}
                                    venue={conference.venue}
                                    conductor={conference.conductor}
                                    editorname={conference.editorname}
                                    
                                    
                                    // link= {papers.researchpaper[0].fil}
                                    // link ={ "http://localhost:8065/uploads/"+workshops.worshopproposol[0].fil}
                                    // workshopProposal={workshops.worshopproposol[0].fil}
                                   
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

export default UpdateConference;