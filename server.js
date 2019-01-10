const express = require('express')
const app=express()


var d =new Date
if(d.getHours<8 || d.getHours>17)
{
    app.get('/*/',(req,res)=>{
        res.send('we are closed now')
    })
}
else app.use(express.static(__dirname))

app.listen(3000,(e)=>{
    if(e) console.error("server down")
    else console.log("server is running on port 3000")
})