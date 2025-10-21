import express ,{json} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'


import registerModel from "../model/User.js";


import sendEmail from '../workers/sendEmail.js'
import sendSMS from '../workers/sendSMS.js'

const router =express.Router();


router.get('/' ,(req,res)=>{
    try{
        res.send("hello Express  is running")
    }
    catch(error)
    {
        console.log(error);
    }
})


router.post("/register", async (req, res) => {
  try {

  const found = await registerModel.findOne({email:req.body.email});
  if(found) return res.status(400).json({error:'you have already registered'})


    let hash = await bcrypt.hash(req.body.password ,12 );
    req.body.password = hash;
    console.log(req.body.password);

    //emial token generator
    let emailToken = (Math.random() +1).toString(16).substring(2);
    let smsToken = (Math.random() +1).toString(16).substring(2);


    const registerFormData = await  registerModel(req.body);
    registerFormData.verifyToken.email = emailToken;
    registerFormData.verifyToken.phone = smsToken;
    await registerFormData.save();

    //Send Email with token to verify

    sendEmail({
            to: req.body.email,
            subject: 'TeachMe  - Email Confirmation',
            body: `Hello ${req.body.name}<br/>
            Welcome to TeachMe app, <br/>
            Please click on this link to verify: <a href="http://localhost:5000/api/user/verify/email/${emailToken}">Click Here</a>
            <br/>
            Thank You,
            <b>Team TeachMe </b>
            `
        })

        const url = `http://localhost:5000/api/user/verify/phone/${smsToken}`;
         sendSMS({
            phone: req.body.phone,
            body: `Hey ${req.body.name}, \n Get Verified by ${url} here.\n Thank You, \n Team TeachMe.`
        })



    // res.json({ status: "Data sent", user: registerFormData });

    res.status(200).json({Success:"User Registered Successfully!"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error , Try again" });
  }
});




// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;
//     const userData = await registerModel.findOne({email });
//     if (userData)
//       {
//        console.log(userData.password ,userData.email);
//        var  comparehash = await bcrypt.compare(password , userData.password);
//        res.status(200).json({status:'User verified!'})

//       }
      
//       if(!userData)
//       {
//         console.error('This email is not associated with any account');
//         return res.json({ error : "This email is not associated with any account"})
//       } else if(!comparehash)
//       {
//         console.error('Incorrect Password');
//         return res.json({error : "Incorrect Password!"})
//       }
//     // res.status(200).json({status: 'User verified!'});


//   } catch (error) {
//     console.log(error);
    
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 1. Check if user exists
//     const userData = await registerModel.findOne({ email });
//     if (!userData) {
//       return res.status(400).json({ error: "This email is not associated with any account" });
//     }

//     // 2. Compare password
//     const isMatch = await bcrypt.compare(password, userData.password);
//     if (!isMatch) {
//       return res.status(401).json({ error: "Incorrect Password!" });
//     }

//     // 3. Optional: check if user is verified
//     // if (!userData.userVerified.email || !userData.userVerified.phone) {
//     //   return res.status(403).json({ error: "Please verify your email and phone first!" });
//     // }

//     // 4. Success
//     res.status(200).json({ status: "User verified!" });

//  let payload ={
//   user_id:userData._id,
//   email:userData.email,
//  }

//  let jsonToken =jwt.sign(payload,config.get("SECRET_KEY.JWT"),{
//   expiresIn:"10h",
//  });

// //  console.log(jsonToken);
//  res.status(200).json({
//   status:'user verified!',
//   token
//  })

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 1️⃣ Check if user exists
//     const userData = await registerModel.findOne({ email });
//     if (!userData) {
//       return res.status(400).json({ error: "This email is not associated with any account" });
//     }

//     // 2️⃣ Compare password
//     const isMatch = await bcrypt.compare(password, userData.password);
//     if (!isMatch) {
//       return res.status(401).json({ error: "Incorrect Password!" });
//     }

//     // 3️⃣ Optional: verify email/phone
//     // if (!userData.userVerified.email || !userData.userVerified.phone) {
//     //   return res.status(403).json({ error: "Please verify your email and phone first!" });
//     // }

//     // 4️⃣ Generate JWT
//     const payload = {
//       user_id: userData._id,
//       email: userData.email,
//     };

//     const token = jwt.sign(payload, config.get("SECRET_KEY.JWT"), {
//       expiresIn: "10h",
//     });

//     console.log("Generated JWT:", token);

//     // 5️⃣ Send final response only once
//     res.status(200).json({
//       status: "User verified!",
//       token: token,
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await registerModel.findOne({ email });

    if (!userData) {
      return res.status(400).json({ error: "This email is not associated with any account" });
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect Password!" });
    }

    const payload = {
      user_id: userData._id,
      email: userData.email,
    };

    const token = jwt.sign(payload, config.get("SECRET_KEY.JWT"), {
      expiresIn: "10h",
    });

    console.log("Generated JWT:", token);

    res.status(200).json({
      status: "User verified!",
      token: token,
       userId: userData._id.toString()
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});



router.get('/verify/email/:token' , async(req,res)=>{
     try {
        let token = req.params.token;
        const userData = await registerModel.findOne({"verifyToken.email": token});
        if(userData.userVerified.email) return res.status(200).send(`<h1>Email is already verifed</h1>`)
        userData.userVerified.email = true;
        await userData.save();
        res.status(200).send(`<h1>Email is verifed successfully!</h1>`);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error, Try Again!'});
    }
})



//phone verification system:
router.get('/verify/phone/:token', async (req, res)=>{
    try {
        let token = req.params.token;
        const userData = await registerModel.findOne({"verifyToken.phone": token});
        if(userData.userVerified.phone) return res.status(200).send(`<h1>This Phone Number is already verifed!</h1>`)
        userData.userVerified.phone = true;
        await userData.save();
        res.status(200).send(`<h1>This Phone Number is verifed successfully!</h1>`);
    } catch (error) {
        console.log(error);
    }
});


// router.post("/search", async (req, res) => {
//   try {
//     const { skill } = req.body;
    
//     const users = await registerModel.find({
//       teach: { $regex: skill, $options: "i" },
//     });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


//After making code
router.post("/search", async (req, res) => {
    try {
        const { skill } = req.body;
        // CHANGE: Get userId from JWT middleware (assumes req.user is set)
        const userId = req.user ? req.user.user_id : null;
        if (!skill) {
            return res.status(400).json({ error: "Skill is required" });
        }
        // CHANGE: Exclude current user from results if userId is available
        const query = { teach: { $regex: skill, $options: "i" } };
        if (userId) {
            query._id = { $ne: userId };
        }
        const users = await registerModel.find(query).select("name teach learn about");
        // CHANGE: Updated response format for consistency
        res.json({ message: "Search completed", data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});


// import Message from "../model/Message.js";

// router.get("/messages/:fromUserId/:toUserId", async (req, res) => {
//   try {
//     const { fromUserId, toUserId } = req.params;
//     if (req.user.user_id !== fromUserId) {
//       return res.status(403).json({ error: "Unauthorized" });
//     }
//     const messages = await Message.find({
//       $or: [
//         { fromUserId, toUserId },
//         { fromUserId: toUserId, toUserId: fromUserId },
//       ],
//     }).sort({ createdAt: 1 });
//     res.json(messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// router.post("/messages", async (req, res) => {
//   try {
//     const { fromUserId, toUserId, content } = req.body;
//     if (req.user.user_id !== fromUserId) {
//       return res.status(403).json({ error: "Unauthorized" });
//     }
//     const message = new Message({
//       fromUserId,
//       toUserId,
//       content,
//       createdAt: new Date(),
//     });
//     await message.save();
//     res.json(message);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


export default router;



