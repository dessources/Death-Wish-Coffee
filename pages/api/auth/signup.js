import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import {hash} from 'bcryptjs';

export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Fail...!"}))

    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({error:"Don't have form data ..."});
        const {firstName, lastName, email, password} = req.body;

        const checkexisting = await Users.findOne({email})
        if(checkexisting)return res.status(422).json({message:"User Already Exist"})

        Users.create({firstName,lastName,email,password:await hash(password, 12)}, function(err,data){
            if(err) return res.status(404).json({err});
            res.status(201).json({status:true,user:data})
        }) 

    }else{
       res.status(500).json({message:"HTTP method not valide only POST accepted"})
    }
}
