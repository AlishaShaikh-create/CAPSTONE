
import {Resend} from 'resend'
let apiKey = ' re_igj56Nj6_3TaEBQPUvb9hdLwDmq8uumTw';
const resend = new Resend(apiKey);

async function sendEmail()
{
    const {data , error } = await resend.emails.send({
        from : 'alisha@alishashaikh.com',
        to:'alishashaikh186555@gmail.com',
        subject:"Alisha email",
        html:'<strong> HELLO :)  This msg is from ALISHA </strong>'
    });

    if(error){
    return console.log({error});
}

console.log({data});


}
sendEmail();
