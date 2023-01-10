import React from 'react'
import Navbar from "../components/Navbar"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

  const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <>
    <Navbar/>
    <div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h1" 
          style={{
            color: 'red',
            fontWeight: 'bold'
            }}>
            LOGIN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField style={{
                backgroundColor: 'white',
            }}
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              autoFocus
            />
            <TextField style={{backgroundColor : 'white'}}
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color: 'white'}}>
                  Forgot password ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/CreateAccount" variant="body2" style={{color: 'white'}}>
                  {"Create account"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </>
  )
}

