const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    date:{
      type:Date,
      required:true
    },
   conductor:{
     type:String,
     required:true
   },
   photo:[
    { fil: {type: String}}
  ],
   
    editorname: {
      type: String,
      required: true,
    },

    time:{
      type: String,

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

    description:{
      type: String,
      required:true
    },

    venue:{
      type:String,
      required:true
    },
    createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
    updatedAt:Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conference", PostSchema);
