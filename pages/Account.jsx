import React from 'react'
import Navbar from "../components/Navbar"
import {getSession, useSession, signOut} from "next-auth/react"
import {useState} from 'react'

const Account = () => {

    const { data:session } = useSession()
    
  return (
    <>
    <Navbar/>
    {session ? User({session, handleSignOut}) : Guest()}
    </>
  )
}

function Guest(){
    return(
        <h3>Guest Homepage</h3>
    )
}

function User({session, handleSignOut}){
    return(
        <div>
        <h3>Vous êtes connectés avec succès</h3>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

function handleSignOut(){
    signOut()
}

export default Account

export async function getServerSideProps({req}){
    const session = await getSession({req})

    if(!session){
        return{
            redirect:{
                destination:'/Login',
                permanent:false
            }
        }
    }

    return{
        props:{session}
    }
}