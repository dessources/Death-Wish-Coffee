import React from 'react'
import { Box, Container } from '@mui/system'
import { Button, Typography } from '@mui/material'

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
                alignItems:'center',
                marginBottom: 50
            }}>
                <Box style={{
                    width: 912,
                    zIndex: 9
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                          fontFamily: 'Revans',
                          fontWeight: 900,
                          fontSize: 200,
                          color: 'white'  
                        }}
                    >
                        COFFEE THAT SLAPS
                    </Typography>
                </Box>
                <Box>
                <video className="video__el js-video" style={{ height: 600, width: 600 }} data-src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4" autoplay="true" loop="true" muted="true" playsinline="" src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4"></video>
                </Box>
                
            </Container>
            <Container style={{
                display: "flex",
                alignItems:'center',
                marginBottom: 50
            }}>
                <Box>
                <video className="video__el js-video" style={{height: 600, width: 600}} data-src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4" autoplay="true" loop="true" muted="true" playsinline="" src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4"></video>
                </Box>
                <Box style={{
                    width: 912,
                    zIndex: 9
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                          fontFamily: 'Revans',
                          fontWeight: 900,
                          fontSize: 200,
                          color: 'white'  
                        }}
                    >
                        EMBODY THE BREW
                    </Typography>
                </Box>
                
                
            </Container>
            <Container style={{
                display: "flex",
                alignItems:'center'
            }}>
                <Box style={{
                    width: 912,
                    zIndex: 9
                }}
                >
                    <Typography
                        variant="h1"
                        style={{
                          fontFamily: 'Revans',
                          fontWeight: 900,
                          fontSize: 200,
                          color: 'white'  
                        }}
                    >
                        HANDLE OUR BEANS
                    </Typography>
                </Box>
                <Box>
                <video className="video__el js-video" style={{height: 600, width: 600}} data-src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4" autoplay="true" loop="true" muted="true" playsinline="" src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4"></video>
                </Box>
                
            </Container>
            
        </>
    );
}

export default HomepageVideos