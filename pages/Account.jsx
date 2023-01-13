import React from 'react'
import Navbar from "../components/Navbar"
import {getSession, useSession, signOut} from "next-auth/react"
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
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

    const buttons = [
        <Button key="one">Order History</Button>,
        <Button key="two">Addresses</Button>,
        <Button key="three">Subscriptions</Button>,
        <Button key="three" onClick={handleSignOut}>Log Out</Button>,
      ];

    return(
        <div>
        <Typography
          variant="h1"
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "75px",
          }}
        >
          HEY, {session.user.name}
        </Typography>
        <Box
      sx={{
        justifyContent: "center",
        marginTop: '25px',
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        style={{
            width: '300px',   
        }}
      >
        {buttons}
      </ButtonGroup>
    </Box>
    <Box
    sx={{
        justifyContent: "center",
        textAlign: 'center',

        
         }}>
        <p><strong>Customer Info :</strong></p>
        <p><strong>name : </strong>{session.user.name}</p>
        <p></p>
        <p><strong>Email : </strong>{session.user.email}</p>
        <p></p>
    </Box>
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