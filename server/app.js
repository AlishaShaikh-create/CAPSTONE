import express from 'express'
import cors from 'cors'

//db connection
import './dbConnect.js';

//Model import 
import registerModel from './model/User.js';


const app = express();
app.use(express.json())
app.use(cors())

const PORT = 5000;

app.get('/' , (req,res)=>{
    res.send("The server is running")
});

app.post('/register', async(req,res)=>{
try{
    console.log(req.body)
    const registerFormData = new registerModel(req.body);
    console.log(registerFormData);

    await registerFormData.save()
    res.json({status:"Data sent"})
}catch(error)
{
    console.log(error);
}


})

app.listen(PORT , ()=>{
    console.log(`The app is listening to the port ${PORT}`)
})