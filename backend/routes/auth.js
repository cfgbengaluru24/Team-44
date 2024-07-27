{require("dotenv").config();}
const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs');
const studentAuth = require("../models/studentAuth");
const adminAuth = require("../models/adminAuth");


router.post("/studentSignin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.name===""||bodydata.email==="" || bodydata.password==="" || bodydata.contactNumber==="" || bodydata.prntContact===""|| bodydata.contactNumber.length<10 || bodydata.parentContact.length<10){
        res.json({success,error:"Enter the valid details."});
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const strongpassword=await bcrypt.hash(bodydata.password,salt);
            let userNum=parseInt(bodydata.contactNumber);
            let parentNum=parseInt(bodydata.parentContact);
            const createduser=await studentAuth.create({
                name:bodydata.name,
                email:bodydata.email,
                password:strongpassword,
                contactNumber:userNum,
                parentContact:parentNum
            })
            const token={
                user:{id:createduser.id}
            }
            const authtoken=jwt.sign(token,process.env.SECRET);
            success=true;
            res.json({success,authtoken});
        }
        catch(error){
            res.json({success,error});
        }
    }
})
router.post("/adminSignin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.name===""||bodydata.email==="" || bodydata.password==="" || bodydata.contactNumber===""|| bodydata.contactNumber.length<10){
        res.json({success,error:"Enter the valid details.2"});
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const strongpassword=await bcrypt.hash(bodydata.password,salt);
            let userNum=parseInt(bodydata.contactNumber);
            let parentNum=parseInt(bodydata.parentContact);
            const createduser=await adminAuth.create({
                name:bodydata.name,
                email:bodydata.email,
                password:strongpassword,
                contactNumber:userNum,
            })
            const token={
                user:{id:createduser.id}
            }
            const authtoken=jwt.sign(token,process.env.SECRET);
            success=true;
            res.json({success,authtoken});
        }
        catch(error){
            res.json({success,error});
        }
    }
})
router.post("/studentLogin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.email===""){
        res.json({success,error:"Enter the correct email address."});
    }
    else{
        try{
            const newStudentUser=await studentAuth.findOne({email:bodydata.email});
            if(!newStudentUser){
                res.json({success,error:"email doesnot exist"});  
            }
            else{
                const result=await bcrypt.compare(bodydata.password,newStudentUser.password);
                if(result){
                    const token={
                        user:{id:newStudentUser.id}
                    };
                    const authtoken=jwt.sign(token,process.env.SECRET);
                    success=true;
                    res.json({success,authtoken});
                }
                else{
                    res.json({success,error:"wrong password"});
                }
            }
        }
        catch(error){
            res.json({success,error});
        }
    }
})
router.post("/adminLogin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.email===""){
        res.json({success,error:"Enter the correct email address."});
    }
    else{
        try{
            const newAdminUser=await adminAuth.findOne({email:bodydata.email});
            if(!newAdminUser){
                res.json({success,error:"email does not exist"});  
            }
            else{
                const result=await bcrypt.compare(bodydata.password,newAdminUser.password);
                if(result){
                    const token={
                        user:{id:newAdminUser.id}
                    };
                    const authtoken=jwt.sign(token,process.env.SECRET);
                    success=true;
                    res.json({success,authtoken});
                }
                else{
                    res.json({success,error:"wrong password"});
                }
            }
        }
        catch(error){
            res.json({success,error});
        }
    }
})

module.exports=router;