var express=require("express");
var imp=require("./module.js");
const app=express();
const port=1200;

app.get("/",(req,res)=>{
    res.send(imp.myDate());

});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
