import connectMongo from '../../database/conn';
import {Address} from '../../model/Schema';

export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Fail...!"}))

    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({error:"Don't have form data ..."});
        const {address1, address2, city, country, zip} = req.body;

        Address.create({address1,address2,city,country,zip}, function(err,data){
            if(err) return res.status(404).json({err});
            res.status(201).json({status:true,user:data})
        }) 

    }else{
       res.status(500).json({message:"HTTP method not valide only POST accepted"})
    }
}