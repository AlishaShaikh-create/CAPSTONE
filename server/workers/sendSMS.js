import twilio from 'twilio';
const accountSid = "AC44a7d4469142fd1ee303d724f2d041a2"
const authToken = "f9e84058ec849f568a1e79087a70760f"
const client = new twilio (accountSid , authToken);

async function sendSMS(){
    try {

        const message = await client.messages.create({
            body: "This is Alisha , I hope you got the text!",
            from: '+18302244237',
            to: "+919666186555"
        });

        console.log(message.body);

    } catch (error) {
        console.log(error);
    }
}

sendSMS()