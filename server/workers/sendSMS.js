import twilio from 'twilio';

const accountSid ="AC44a7d4469142fd1ee303d724f2d041a2"
const authToken = "f9e84058ec849f568a1e79087a70760f"
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