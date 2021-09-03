import React, { useState } from "react"
import axios from 'axios';
import Layout from '../../components/Layout';
import './Payment.css';



export default function ConferencePayment() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardnumber, setCardnumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setcvc] = useState();
    const [amount, setamount] = useState();

    // const handlePayments = (e) => {

    //     setworshopproposol([
    //         ...worshopproposol,
    //         e.target.files[0]

    //     ]);
    // }


    function sendData(e) {
        e.preventDefault();

        // const form = new FormData();
        // form.append('name', name);
        // form.append('email', email);
        // form.append('cardnumber', cardnumber);
        // form.append('date', date);
        // form.append('cvc', cvc);
        // form.append('amount', amount);

        let data ={
            name:name,
            email:email,
            cardnumber:cardnumber,
            date:date,
            cvc:cvc,
            amount:amount
        };

        // console.log(worshopproposol)
        // axios.post("http://localhost:8065/api/paper/create",newPaper).then(()=>{
        //     alert("Research paper added ");
        // }).catch((err)=>{
        //     alert(err);
        // })
        const token = localStorage.getItem('token');

        console.log('token is '+token);

       //// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwYTQyMmRiMTI2YjQwMThlODc2ZTciLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE2MjQ4MDE0NDYsImV4cCI6MTYyNTQwNjI0Nn0.s3vyEE-jxlc3ZKZYxkyhdYjiUQktFLpy-1DShF4zw1c';

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('user token'+config);
        
        axios.post( 
          'http://localhost:8065/api/payment/conference/create',
          data,
          config
        ).then(console.log).catch(console.log)

        // axios.post("http://localhost:8065/api/payment/create", data)
        //     .then(function (response) {
        //         console.log(response);
        //         alert("payment sucssefully added")


        //     })
            .catch(function (error) {
                console.log(error);

            });
    }

    return (
        <Layout>
            <form onSubmit={sendData}>
              <div class ="app-container">
                  <div class="top-box">
                  <p><span class ="left-icon">&#x2190;</span>CHEKOUT<span class ="right-icon">&#xb7;</span></p>
                  </div>
                  <div class ="middle-box">
                      {/* <h1>1599<span>$</span></h1> */}
                      <h1>Pay for Research</h1>
                  </div>
                  <div class ="bottom-box">
                      {/* <button type ="button" class="payment-option-btn">Pay with paypal</button> */}
                      <button type ="button" class="payment-option-btn">Pay with credit card</button>
                      <div class="card-details">
                          
                          <div class="card-num-field-group">
                              <label>Card Number</label><br/>
                              <input type ="text" class="card-num-field" id ="cardnumber" placeholder ="xxxx-xxxx-xxxx-xxxx"onChange={(e)=>{
                                  setCardnumber(e.target.value)
                              }}></input>

                          </div>
                          
                          <div class="date-field-group">
                              <label>Date</label><br/>
                              <input type ="text" class="date-field" id="date" placeholder ="date"onChange={(e)=>{
                                  setDate(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="cvc-field-group">
                              <label>Cvc</label><br/>
                              <input type ="number" id ="cvc" class="cvc-field" placeholder ="xxx"onChange={(e)=>{
                                  setcvc(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="name-field-group">
                              <label>Card holder name</label><br/>
                              <input type ="text" id = "name" class="name-field" placeholder ="Full name"onChange={(e)=>{
                                  setName(e.target.value)
                              }}></input>
                              
                          </div>
                          <div class="name-field-group">
                              <label>Card holder email</label><br/>
                              <input type ="text" id = "email" class="name-field" placeholder ="Email"onChange={(e)=>{
                                  setEmail(e.target.value)
                              }}></input>
                              </div>
                               <div class="name-field-group">
                              <label>Amount</label><br/>
                              <input type ="number" id = "amount" class="name-field" placeholder ="Amount"onChange={(e)=>{
                                  setamount(e.target.value)
                              }}></input>
                              
                          </div>
                          <button type ="button "class="pay-btn">Pay Now</button>
                      </div>
                  </div>
              </div>
            </form>
        </Layout>
    )
}