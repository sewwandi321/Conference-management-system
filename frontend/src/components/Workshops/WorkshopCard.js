import React from 'react'
import './WorkshopCard.css';
import DownloadLink from "react-download-link";



function Card({ topic, description, name, email, link, workshopProposal }) {
    
    return (
        
        <div className="card-contain" style={{ marginLeft: 40, marginBottom: 40 }}>
            
            <div className="card-cont">
                <div className="card-tit">
                    <h3>{topic}</h3>
                </div>
                <div className="card-cont">
                    <div className="card-desc">
                        <h6>{description}</h6>
                    </div>
                    <div className="card-cont">
                        <div className="card-nam">
                            <h8>{name}</h8>
                        </div>
                        {/* <div className="card-cont">
                <div className="card-emai">
                    <h8>{email}</h8>
                </div> */}


                        <div className="card-body">
                            <p>
                                <a href={link} download="My_File.ppt">
                                    {/* <a href="http://localhost:8065/uploads/test.pdf" download> */}
                                    <img src={link} alt={workshopProposal} width="104" height="142" />
                                    {/* <i class="text-danger bi bi-download" ></i>  */}
                                </a>

                            </p>

                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <DownloadLink
                        label="Download"
                        filename={link}
                        exportFile={() => "Client side cache data here…"}
                    />

                    &nbsp;&nbsp; <i class="text-danger bi bi-download" ></i>


                </div>
            </div>
            &nbsp;&nbsp;
        </div>
        // </div>
    )
}
export default Card;