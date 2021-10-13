const express= require('express');

const app= express();


app.listen(3000,()=> {
    
    console.log("server vidor 500");
    
});
app.get('/',(req,res)=>{
    res.send('<h1>mejor ahora </h1>')
})