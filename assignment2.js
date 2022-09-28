const express=require('express');
const app = express()

app.get("",(req,res)=>{
    res.send("<h1>Main Page</h2>")
})

app.get("/Page1",(req,res)=>{
    res.send("<h1>Page(1)</h2>")
})

app.get("/Page2",(req,res)=>{
    res.send("<h1>Page(2)</h2>")
})

app.get("/Page3",(req,res)=>{
    res.send("<h1>Page(3)</h2>")
})

app.get("/Page4",(req,res)=>{
    res.send("<h1>Page(4)</h2>")
})


app.listen(3000);
