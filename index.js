const express = require('express')
const app = express()


app.get('/',(req,res)=>{

    res.send({message:'Hello Stranger!'})
})

app.listen(5000,()=>{
    console.log('listening to 5000......')
})