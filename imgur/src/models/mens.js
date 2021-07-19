const express = require("express");

const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    uid:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    dop:{
        type:Date,
        require:true,
        trim:true
    }
})

const MensData = new mongoose.model("Mensdata", menSchema)
module.exports = MensData;