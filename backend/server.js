const express=require('express');
{require("dotenv").config();}
const app=express();
const dbjs=require("./dbs.js");
dbjs();

const cors=require("cors");
app.use(cors());
app.use(express.json());
const port =process.env.PORT || 4000;

app.use('/api/auth',require("./routes/auth.js"));

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})