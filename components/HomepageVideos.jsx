import React from 'react'
import { Box, Container } from '@mui/system'
import { Button, Typography } from '@mui/material'
import Link from "next/link";

//styles
import {
    handsText,
    coffeeContainer,
    coffee,
    coffeeTitle,
    coffeeVideo,
    coffeeText,
    coffeeTextResp,
    coffeeButton,
    coffeeButtonResp,
    brewContainer,
    brew,
    brewVideo,
    brewTitle,
    brewText,
    brewButton,
    beansContainer,
    beans,
    beansTitle,
    beansVideo,
    beansText,
    beansTextResp,
    beansButton,
    beansButtonResp
} from '../styles/HomepageVideos.module.css'

const HomepageVideos = () => {
    return (
        <>
            <Box style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 50
            }}>
                <img
                    src="images/hands.png"
                    alt="handshake"
                    style={{
                        width: 180,
                        height: 100,
                        marginTop: 60
                    }}
                />
                <Typography
                    align='center'
                    className={handsText}

                >
                    Our Medium Roast, Dark Roast, Espresso Roast and Valhalia Java Coffees are always Fair Trade + USDA Certified Organic.
                </Typography>
            </Box>
            <Container
                className={coffeeContainer}
            >
                <Box className={coffee}

                >
                    <Typography
                        variant="h1"
                        className={coffeeTitle}

                    >
                        COFFEE THAT SLAPS
                    </Typography>
                </Box>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <video
                        className={coffeeVideo}
                        data-src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4">

                    </video>
                    <Typography
                        variant='body2'
                        className={coffeeText}

                    >
                        Always sourced from the highest-quality beans. Ruining other coffee since 2012.
                    </Typography>
                    <Button
                        variant="contained"
                        className={coffeeButton}

                    >
                        <Link href={"/Shop"}>SHOP NOW</Link>
                    </Button>
                </Box>
                <Box>
                <Typography
                    variant='body2'
                    className={coffeeTextResp}

                >
                    Always sourced from the highest-quality beans. Ruining other coffee since 2012.
                </Typography>
                <Button
                    variant="contained"
                    className={coffeeButtonResp}

                >
                    <Link href={"/Shop"}>SHOP NOW</Link>
                </Button>
                </Box>
            </Container>

            <Container
                className={brewContainer} 
                >
                <Box style={{
                    marginTop: 50,
                    width: 600
                }}>
                    <video
                        className={brewVideo}
                        data-src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4">

                    </video>
                    <Typography
                        variant='body2'
                        className={brewText}
                        
                    >
                        Handcrafted mugs, tees, hoodies and more to pair with caffeine-heavy habits.
                    </Typography>
                    <Button
                        variant="contained"
                        className={brewButton}
                       
                    >
                        <Link href={"/Shop"}>SHOP NOW</Link>
                    </Button>
                </Box>
                <Box 
                    className={brew}
                    
                >
                    <Typography
                        variant="h1"
                        className={brewTitle}
                        
                    >
                        EMBODY THE BREW
                    </Typography>
                </Box>


            </Container>
            <Container 
                className={beansContainer}
               >
                <Box className={beans}
                
                >
                    <Typography
                        variant="h1"
                        className={beansTitle}
                        
                    >
                        HANDLE OUR BEANS
                    </Typography>
                </Box>
                <Box style={{
                    marginTop: 50
                }}>
                    <video
                        className={beansVideo}
                        data-src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4"
                        autoplay="true"
                        loop="true"
                        muted="true"
                        playsinline=""
                        src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4">

                    </video>

                    <Typography
                        variant='body2'
                        className={beansText}
                        
                    >
                        Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near you.
                    </Typography>
                    <Button
                        variant="contained"
                        className={beansButton}
                        /* style={{
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
                        }} */

                    >
                        <Link href="#">THE STORE</Link>
                    </Button>
                </Box>
                <Box>
                <Typography
                        variant='body2'
                        className={beansTextResp}
                        
                    >
                        Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near you.
                    </Typography>
                    <Button
                        variant="contained"
                        className={beansButtonResp}
                       
                    >
                        <Link href="#">THE STORE</Link>
                    </Button>
                </Box>
            </Container>

        </>
    );
}

export default HomepageVideos