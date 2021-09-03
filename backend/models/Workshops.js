const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const workshopschema=new schema(
    {
        date: {
            type: String,
            required:true,
            //  trim:true
        },
        email:{
            type: String,
             required:true
        },
        topic:{
            type: String,
             required:true
        },
        description:{
            type: String,
            // required:true
        },
        status:{
            type:String,
            enum:['approved','rejected','pending'],
            default:'pending'
        },
       
        worshopproposol:[
            { fil: {type: String}}
        ],
        createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        updatedAt:Date,
        
        },{ timestamps: true})
        

const proposal =mongoose.model("Workshop",workshopschema);
module.exports=proposal;