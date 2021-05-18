const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//routing
app.get("/",(req,res)=>{
    res.send("Hello world");
})

// Create server
app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})