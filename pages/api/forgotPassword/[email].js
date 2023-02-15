import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import { v4 as uuidv4 } from 'uuid';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Fail...!"}))

    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({error:"Don't have form data ..."});
        const {email} = req.body;

        const user = await Users.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"})

        const passwordResetToken = uuidv4();
        user.passwordResetToken = passwordResetToken;
        user.passwordResetExpires = Date.now() + 3600000; // 1 hour

        await user.save();

        // send password reset email with the token
        const msg = {
            to: email,
            from: process.env.EMAIL,
            subject: 'Password Reset Request',
            text: `Please use the following link to reset your password: ${process.env.NEXT_AUTH_URL}/resset-password/?token=${passwordResetToken}&email=${email}`
        };

        sgMail.send(msg)
        
            .then(() => {
                console.log('Password reset email sent');
                return res.status(200).json({message: "Password reset email sent"})
            })
            .catch(error => {
                console.error(error);
                return res.status(500).json({message: "Password reset email failed to send"})
            });

    }else{
       res.status(500).json({message:"HTTP method not valide only POST accepted"})
    }
    
}