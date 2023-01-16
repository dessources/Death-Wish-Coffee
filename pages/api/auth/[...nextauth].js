import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
          name:"Credentials",
          async authorize(credentials,req){
            connectMongo().catch(error => {error:"Connection Failed ..."})

            const result = await Users.findOne({email:credentials.email})
            if(!result){
              throw new Error("No user Found with this Email please Sign up!")
            }
            const checkPassword = await compare(credentials.password,result.password)
            if(!checkPassword || result.email !== credentials.email){
              throw new Error ("username or password doesn't match !");
            }
            return result;
          }
        })
      ],
      
})