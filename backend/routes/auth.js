{require("dotenv").config();}
const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs');

router.post("/studentSignin",async(req,res)=>{
    const bodydata=req.body;
    let success=false;
    if(bodydata.name===""||bodydata.email==="" || bodydata.password==="" || bodydata.contactNumber==="" || bodydata.prntContact===""){
        res.json({success,error:"Enter the valid details."});
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const strongpassword=await bcrypt.hash(bodydata.password,salt);
            const createduser=await auth.create({
                name:bodydata.name,
                email:bodydata.email,
                password:strongpassword,
                number:parseInt(bodydata.contactNumber),
                parentContact:parseInt(bodydata.prntContact)
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


module.exports=router;