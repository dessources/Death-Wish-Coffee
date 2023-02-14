import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import {Address} from '../../../model/Schema'
import {hash} from 'bcryptjs';

export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Fail...!"}))

    //if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({error:"Don't have form data ..."});
        const {firstName, lastName, email, password, address1, address2, city, country, zip} = req.body;

        const checkexisting = await Users.findOne({email})
        if(checkexisting)return res.status(422).json({message:"User Already Exist"})

        Users.create({firstName, lastName, email, password: await hash(password, 12)}, async function(err, user) {
            if(err) return res.status(404).json({err});
            const newAddress = await Address.create({address1, address2, city, country, zip, user: user._id});
            res.status(201).json({status:true,user, address: newAddress})
        })

   // }else{
     //  res.status(500).json({message:"HTTP method not valide only POST accepted"})
    //}
    
}
