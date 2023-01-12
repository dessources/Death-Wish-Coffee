import React from "react";
import AppBar from "@mui/material/AppBar";
import { TextField, Toolbar, Typography, Button } from "@mui/material";



const Footer = () => {
    return (
        <div>
            <AppBar style={{ backgroundColor: 'red', height: 206 }} position='fixed' sx={{ top: 'auto', bottom: 423 }}>

                <Typography
                    variant='h5'
                    color='black'
                    align='center'
                    component="h2"
                    style={{fontSize:20, fontWeight: '700',marginTop:50}}
                >
                    LET'S DRINK COFFEE AND THROW THINGS AT HAPPY PEOPLE
                </Typography>
                <form style={{padding:20,display:'flex'}}>
                    <TextField 
                        style={{backgroundColor:'white',width: 343, height: 48,margin:'auto',marginRight:0}}
                        placeholder="Enter your Email Address"
                    />
                    <Button
                        type='submit'
                        style={{width: 216, height: 48, backgroundColor:'black', color:"white", marginLeft:0,marginRight:'auto',cursor:'pointer'}}
                        
                    >
                        SIGN ME UP
                    </Button>
                </form>

            </AppBar>
            <AppBar style={{ backgroundColor: 'black', height: 423 }} position='fixed' sx={{ top: 'auto', bottom: 0 }}>
            </AppBar>
        </div>
    );
}

export default Footer;