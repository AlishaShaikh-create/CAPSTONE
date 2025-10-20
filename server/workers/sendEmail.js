
import {Resend} from 'resend'
let apiKey = ' re_igj56Nj6_3TaEBQPUvb9hdLwDmq8uumTw';
const resend = new Resend(apiKey);

async function sendEmail(emailData)
{
    const {data , error } = await resend.emails.send({
        from : 'alisha@alishashaikh.com',
        to:emailData.to,
        subject:emailData.subject,
        html:emailData.body,
    });

    if(error){
    return console.log({error});
}

console.log({data});


}
// sendEmail();

export default sendEmail;
