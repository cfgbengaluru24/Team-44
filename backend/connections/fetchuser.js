{require("dotenv").config();}
const jwt=require("jsonwebtoken");

console.log(process.env.SECRET);

const fetchuser=async(req,res,next)=>{
    try{

        const authtoken=req.header('authtoken');
    
        if(!authtoken){
            console.log("no Authentication");
            return res.json({success:false,error:"Authentication not matched"});
        }   
        let tokendetail=jwt.verify(authtoken,process.env.SECRET);
        req.userid=tokendetail.user.id;
        next();
    }
    catch(e){
        console.log(e);
    }

}
module.exports=fetchuser;