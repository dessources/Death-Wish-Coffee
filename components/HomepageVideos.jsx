import React from 'react'
import { Box, Container } from '@mui/system'
import { Button, Typography } from '@mui/material'
import Link from "next/link";

const HomepageVideos = () => {
    return (
        <>
            <Box style={{
                width: 1076,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: 50
            }}>
                <img
                    src="images/hands.png"
                    alt="handshake"
                    style={{
                        width: 180,
                        height: 100
                    }}
                />
                <Typography
                    align='center'
                    style={{
                        color: 'white',
                        marginTop: 10,
                        fontFamily: 'revansmedium',
                        fontWeight: 900,
                        fontSize: 30
                    }}
                >
                    Our Medium Roast, Dark Roast, Espresso Roast and Valhalia Java Coffees are always Fair Trade + USDA Certified Organic.
                </Typography>
            </Box>
            <Container style={{
                display: "flex",
                alignItems: 'center',
                marginBottom: 150
            }}>
                <Box style={{
                    width: 912,
                    zIndex: 2,
                    position: 'absolute',
                    
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                            fontFamily: 'Revans',
                            fontWeight: 900,
                            fontSize: 200,
                            color: 'white',
                            
                        }}
                    >
                        COFFEE THAT SLAPS
                    </Typography>
                </Box>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <video
                        className="video__el js-video"
                        style={{
                            height: 600,
                            width: 600,
                            position: 'relative',
                            left: 700
                        }}
                        data-src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4">

                    </video>
                    <Typography
                        variant='body2'
                        style={{
                            fontWeight: 'lighter',
                            fontSize: 20,
                            color: 'white',
                            marginTop: 50,
                            marginLeft: 700

                        }}
                    >
                        Always sourced from the highest-quality beans. Ruining other coffee since 2012.
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            fontFamily: "'FenomenSans-Book'",
                            color: "black",
                            backgroundColor: 'red',
                            width: "210px",
                            height: "60px",
                            fontWeight: "500",
                            marginTop: "50px",
                            marginLeft: 700,
                            marginRight: 15,
                            display: "inline-block",
                            cursor: 'pointer'
                        }}
                        
                    >
                        <Link href={"/Shop"}>SHOP NOW</Link>
                    </Button>
                </Box>

            </Container>
            <Container style={{
                display: "flex",
                alignItems: 'center',
                marginBottom: 150
            }}>
                <Box fontStyle={{
                    marginTop: 50,
                    width: 600
                }}>
                    <video
                        className="video__el js-video"
                        style={{
                            height: 600,
                            width: 600,
                            position: 'relative',

                        }}
                        data-src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4">

                    </video>
                    <Typography
                        variant='body2'
                        style={{
                            fontWeight: 'lighter',
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'right',
                            marginTop: 50,
                        }}
                    >
                        Handcrafted mugs, tees, hoodies and more to pair with caffeine-heavy habits.
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            fontFamily: "'FenomenSans-Book'",
                            color: "black",
                            backgroundColor: 'red',
                            width: "210px",
                            height: "60px",
                            fontWeight: "500",
                            marginTop: "50px",
                            marginLeft: 380,
                            display: "inline-block",
                            cursor: 'pointer'
                        }}
                        
                    >
                        <Link href={"/Shop"}>SHOP NOW</Link>
                    </Button>
                </Box>
                <Box style={{
                    width: 912,
                    zIndex: 2,
                    position: 'absolute',
                    left: 700,
                    
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                            fontFamily: 'Revans',
                            fontWeight: 900,
                            fontSize: 200,
                            color: 'white',
                            textAlign: 'right',
                            
                        }}
                    >
                        EMBODY THE BREW
                    </Typography>
                </Box>


            </Container>
            <Container style={{
                display: "flex",
                alignItems: 'center',
                marginBottom: 250
            }}>
                <Box style={{
                    width: 912,
                    zIndex: 2,
                    position: 'absolute',
                    
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                            fontFamily: 'Revans',
                            fontWeight: 900,
                            fontSize: 200,
                            color: 'white',
                            
                        }}
                    >
                        HANDLE OUR BEANS
                    </Typography>
                </Box>
                <Box style={{
                    marginTop: 50
                }}>
                    <video
                        className="video__el js-video"
                        style={{
                            height: 600,
                            width: 600,
                            position: 'relative',
                            left: 700
                        }}
                        data-src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4">

                    </video>

                    <Typography
                        variant='body2'
                        style={{
                            fontWeight: 'lighter',
                            fontSize: 20,
                            color: 'white',
                            marginTop: 50,
                            marginLeft: 700

                        }}
                    >
                        Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near you.
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            fontFamily: "'FenomenSans-Book'",
                            color: "black",
                            backgroundColor: 'red',
                            width: "210px",
                            height: "60px",
                            fontWeight: "500",
                            marginTop: "50px",
                            marginLeft: 700,
                            marginRight: 15,
                            display: "inline-block",
                            cursor: 'pointer'
                        }}
                        
                    >
                        <Link href="#">THE STORE</Link>
                    </Button>
                </Box>

            </Container>

        </>
    );
}

export default HomepageVideos