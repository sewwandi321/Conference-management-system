import React from 'react'
import './Card.css';
import DownloadLink from "react-download-link";
import {Link} from "react-router-dom";

function Card({ title,email,phnum, imageUrl ,link,pdfName }) {

    // navigateSubjectPage(e) {
    //     window.location = `/${courseId}`
    //   }

    return (
        <div className="card-container" style = {{ marginLeft : 40 , marginBottom : 40 }}>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-content">
                <div className="card-email">
                    <h5>{email}</h5>
                </div>
                <div className="card-content">
                <div className="card-phnum">
                    <h6>{phnum}</h6>
                </div>
                
                <div className="card-body">
                    <p>
                    <a href={link} download="My_File.pdf">
                    {/* <a href="http://localhost:8065/uploads/test.pdf" download> */}
                     <img src={link} alt={pdfName} width="104" height="142"/>
                     {/* <i class="text-danger bi bi-download" ></i>  */}
                    </a>

                    </p>
                    
                </div>
                {/* <button type="pay"   className="btn btn-primary">Pay</button> */}
                <button type="pay"   className="btn btn-primary"><Link to='/addpayment' > Pay  </Link></button>
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
    )
}

export default Card;