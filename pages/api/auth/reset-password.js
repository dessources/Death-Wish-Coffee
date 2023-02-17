import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  connectMongo().catch(error=>res.json({error:"Connection Fail...!"}));

  if (req.method === 'POST') {
    if(!req.body) return res.status(404).json({error:"Don't have form data ..."});
    const {password, confirmPassword, token} = req.body;

    if (!token) return res.status(404).json({message: 'Password reset token is required'});

    if (!password || !confirmPassword || password.trim() === '' || confirmPassword.trim() === '') {
        return res.status(422).json({message: 'Password and confirm password are required'});
      }

    if (password !== confirmPassword) {
      return res.status(422).json({message: 'Password and confirm password do not match'});
    }

    const user = await Users.findOne({passwordResetToken: token});
    if(!user) return res.status(404).json({message: 'User not found or token has expired'});

    const now = Date.now();
    if (now > user.passwordResetExpires) {
      return res.status(404).json({message: 'Password reset token has expired'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    await user.save();

    return res.status(200).json({message: 'Password has been reset successfully'});

  } else {
    res.status(500).json({message: 'HTTP method not valid, only POST accepted'});
  }
}