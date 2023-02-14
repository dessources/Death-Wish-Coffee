import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';

export default async function handler(req, res) {
    connectMongo().catch(error => res.json({ error: "Connection Fail...!" }))

    if (req.method === 'POST') {
        if (!req.body) return res.status(404).json({ error: "Don't have form data ..." });

        const { email } = req.body;

        // Check if user exists
        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ error: "User with that email doesn't exist" });

        // Create reset token and expiry date
        const resetToken = uuidv4();
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour
        await Users.findByIdAndUpdate(user._id, { resetToken, resetTokenExpiry });

        // Send email with reset token
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass:  process.env.PASSWORD
            }
        });

        const mailOptions = {
            from:  process.env.EMAIL,
            to: email,
            subject: 'Password reset',
            html: `
                <p>You requested a password reset</p>
                <p>Click this <a href="http://localhost:3000/reset/${resetToken}">link</a> to reset your password</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return res.status(404).json({ error: "Error sending email" });
            res.status(200).json({ message: "Reset email sent" });
        });
    } else {
        res.status(500).json({ message: "HTTP method not valid, only POST accepted" });
    }
}