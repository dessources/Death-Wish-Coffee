import React from "react";
import AppBar from "@mui/material/AppBar";
import { TextField, Typography, Button, Box, Container } from "@mui/material";
import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

//styles
import {footerRed,
        footerBlack,
        link,
        footerResp,
        footerMenu
        } from '../styles/Footer.module.css'



const Footer = () => {
    return (

        <Box >
            <AppBar position='static' sx={{ top: 'auto', bottom: 0,marginTop:'100px' }} >
                <Container style={{ backgroundColor: '#e12727', maxHeight: 206, maxWidth: '100%' }} className={footerRed}>
                    <Typography
                        variant='h5'
                        color='black'
                        align='center'
                        component="h2"
                        style={{ fontSize: 18.5, fontWeight: '700', marginTop: 50 }}
                    >
                        LET'S DRINK COFFEE AND THROW THINGS AT HAPPY PEOPLE
                    </Typography>
                    <form style={{ padding: 20, display: 'flex', marginBottom: 50 }}>
                        <TextField
                            style={{
                                backgroundColor: 'white',
                                width: 343,
                                height: 48,
                                margin: 'auto',
                                marginRight: 0
                            }}
                            placeholder="Enter your Email Address"
                        />
                        <Button
                            type='submit'
                            style={{
                                width: 216,
                                height: 48,
                                backgroundColor: 'black',
                                color: "white",
                                marginLeft: 0,
                                marginRight: 'auto',
                                cursor: 'pointer'
                            }}

                        >
                            SIGN ME UP
                        </Button>
                    </form>

                </Container>
                <Container style={{ backgroundColor: 'black', maxHeight: 423, maxWidth: '100%' }} className={footerBlack}>
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <Link href={"/"}
                            style={{
                                marginRight: 50,
                                marginLeft: 'auto',
                                marginTop: 100
                            }}

                        >
                            <img
                                src={
                                    "https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"
                                }
                                alt=""
                                style={{
                                    height: 250,
                                    widtth: 250,

                                }}
                            />

                        </Link>
                        <Box style={{
                            marginRight: 50,
                            marginLeft: 50,
                            maxWidth: 104,

                        }}
                        >

                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130
                                }}

                            >
                                Company
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter'
                                }}
                                gutterBottom

                            >
                                Reviews
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter'
                                }}
                                gutterBottom

                            >
                                FAQ + Help
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',
                                }}
                                gutterBottom

                            >
                                Refund Policy
                            </Typography>
                            <div style={{ width: 650, display: 'flex', }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'lighter',
                                        marginTop: 60
                                    }}
                                    gutterBottom
                                >
                                    @ Death Wish Coffee Co 2023 All Rights Reserved.
                                </Typography>

                                <Link href="#" ><TwitterIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 90,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>
                                <Link href="#"><FacebookIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,


                                }} />
                                </Link>
                                <Link href="#"><InstagramIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>
                                <Link href="#"><YouTubeIcon style={{
                                    color: 'black',
                                    maxHeight: 35,
                                    width: 30,
                                    marginLeft: 12,
                                    marginTop: 60,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    padding: 3,

                                }} />
                                </Link>

                            </div>


                        </Box>

                        <Box style={{ marginRight: 50, marginLeft: 50 }} >
                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130

                                }}
                            >
                                Accounts + Orders
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Your Account
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Shopping Details
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Subscription
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Wholesale
                            </Typography>
                        </Box>
                        <Box

                            style={{
                                marginRight: 'auto',
                                marginLeft: 50
                            }}>
                            <Typography
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 130

                                }}

                            >
                                Legal
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Terms + Conditions
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}
                                gutterBottom

                            >
                                Privacy Policy
                            </Typography>
                            <Typography
                                className={link}
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',

                                }}

                            >
                                PROP 65
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'lighter',
                                    marginTop: 22
                                }}
                            >
                                Get Wired with us
                            </Typography>

                        </Box>

                    </div>

                </Container>
                <Container className={footerResp}>
                    <div className={footerMenu}>
                        <h2>END OF THE ROAD, JACK.</h2>
                        <Typography
                            style={{
                                width: 140,
                                fontSize: '16px',
                                fontWeight: 'lighter',
                                marginTop: 20,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                color: 'white'
                            }}

                        >
                            Get Wired with us
                        </Typography>
                        <div style={{
                            width: 149,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                        >
                            <Link href="#"><TwitterIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                            <Link href="#"><FacebookIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,


                            }} />
                            </Link>
                            <Link href="#"><InstagramIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                            <Link href="#"><YouTubeIcon style={{
                                color: 'black',
                                maxHeight: 33,
                                width: 28,
                                marginLeft: 12,
                                marginTop: 0,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                padding: 3,

                            }} />
                            </Link>
                        </div>
                        <Typography
                            style={{
                                fontSize: 9,
                                fontWeight: 'lighter',
                                marginTop: 5,
                                width: '765px',
                                marginLeft: 'auto',

                            }}
                            gutterBottom
                        >
                            @ Death Wish Coffee Co 2023 All Rights Reserved.
                        </Typography>
                    </div>


                </Container>

            </AppBar>
        </Box>
    )
}

export default Footer;