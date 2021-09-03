const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const paperschema=new schema(
    {
        title: {
            type: String,
            
              required:true,
            //  trim:true
        },
        
        description:{
            type:String,
             required: true
        },
        email:{
            type: String,
            // required:true
        },
        status:{
            type:String,
            enum:['approved','rejected','pending'],
            default:'pending'
        },
       
        researchpaper:[
            { fil: {type: String}}
        ],
        createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        updatedAt:Date,
        // createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
       
        
        },{ timestamps: true})
        

const pdf =mongoose.model("Researchpaper",paperschema);
module.exports=pdf;
