const express=require('express');
{require("dotenv").config();}
const app=express();
const dbjs=require("./dbs.js");
const cors=require("cors");
dbjs();
app.use(cors());
app.use(express.json());
const port =process.env.PORT || 4000;

app.use('/api/auth',require("./routes/auth.js"));

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})