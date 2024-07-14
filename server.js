import express from 'express'
import connection from './connection.js';
import env from 'dotenv'
import router from './router.js';
env.config()

const app=express()
app.use(express.static('front-end'))
app.use(express.json());
app.use(express.json({limit :"200mb"}))

app.use('/api',router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})

// app.listen(2000,(req,res)=>{
//     console.log("starting server bookmyshow");
// })