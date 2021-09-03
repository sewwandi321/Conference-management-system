import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card";
import Layout from '../../components/Layout';
//grid


// import Card from './components/ReaserchPaper/Card';



function PaperList() {

    const [papers, setPapers] = useState([]);


    useEffect(() => {
        function getPapers() {

            const token = localStorage.getItem('token');

        console.log('token is '+token);

       //// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwYTQyMmRiMTI2YjQwMThlODc2ZTciLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE2MjQ4MDE0NDYsImV4cCI6MTYyNTQwNjI0Nn0.s3vyEE-jxlc3ZKZYxkyhdYjiUQktFLpy-1DShF4zw1c';

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('user token'+config);
        
        const bodyParameters = {
           title: "title"
        };
        // axios.get( 
        //     'http://localhost:8065/api/allpper/',
           
        //     config
        //   ).then(console.log).catch(console.log);
    //       axios.get("http://localhost:8065/api/allpper/").then((res) => {
    //         setPapers(res.data);
    //         console.log(res.data);
    //     }).catch((err) => {
    //         alert(err.message);
    //     })
    // }
            
    axios.get( 
        'http://localhost:8065/api/allpper/',
       
        config
      ).then((res) => {
                setPapers(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPapers();
    }, [])
    //

    return (
        <Layout>
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Research Papers</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
        <div className='PaperList'>
           

            {/* <tbody>
                        {papers.map((papers, index)=>(
                           <tr>
                                 <th scope="row">{index + 1}</th>
                                <th>{papers.name}</th>
                                 <th>{papers.phnum}</th>
                                 <th>{papers.email}</th>
                                
                           </tr> 
                        ))}
                    </tbody> */}

            <div class="container">
            
                <div class="row">
               
                    <div class="col">
                   <br></br>
                   
                        <div class="row">
                   
                          {papers.filter((p)=>p.status == "approved").map((papers, index) => (

                                <Card className="cardContainer"
                                    title={papers.title}
                                    email={papers.email}
                                    phnum={papers.description}
                                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                                    
                                    // link= {papers.researchpaper[0].fil}
                                    link ={ "http://localhost:8065/uploads/"+papers.researchpaper[0].fil}
                                    pdfName={papers.researchpaper[0].fil}
                                   
                                />
                                

                            ))}
                             
                    
                           
                            </div>


                    </div>


                </div>
            </div>




        </div>
        </Layout>
    )

}

export default PaperList;