const express = require('express');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const paymentschema = new schema(
    {

        name: {
            type: String,
            required: true,
            //  trim:true
        },
        email: {
            type: String,
            required: true,
            //  trim:true
        },
        cardnumber: {
            type: String,
            required: true,
            //  trim:true
        },
        date: {
            type: String,
            required: true,
            //  trim:true
        },
        cvc: {
            type: Number,
            required: true,
            //  trim:true
        },
        amount: {
            type: Number,
            required: true,
            //  trim:true
        },

    
        
    }, { timestamps: true });


const payment = mongoose.model("Payment", paymentschema);
module.exports = payment;