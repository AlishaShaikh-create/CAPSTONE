import twilio from 'twilio';
import dotenv from 'dotenv'
dotenv.config();
const accountSid =process.env.SID
const authToken = process.env.TOKEN 
const client = new twilio (accountSid , authToken);

async function sendSMS(smsData){
    try {

        const message = await client.messages.create({
            body: smsData.body,
            from: '+18302244237',
            to: smsData.phone
        });

        console.log(message.body);

    } catch (error) {
        console.log(error);
    }
}

// sendSMS()
export default sendSMS;