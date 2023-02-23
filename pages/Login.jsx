import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate.js";
import { useRouter } from 'next/router';
import Footer from "../components/Footer";

const theme = createTheme();

export default function Login() {

  const BtnConnexion = {
    background: '#898e8e',
    color: 'black',
    fontWeight: 'bold',
    height: '50px',
    marginTop: '20px',
    marginBottom: '15px',
    "&:hover": {
      backgroundColor: '#e12727',
    }
  }

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    const status = await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password,
      callbackUrl:"/Account"
    })
    console.log(status)
    if(status.ok)router.push(status.url)
  }

  async function handleGoogleSignin() {
    //signIn("google", { callbackUrl: "http://localhost:3000/Account" });
    signIn("google", { callbackUrl: `${process.env.NEXT_AUTH_URL,"/Account"}` });
  }

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Typography
          component="h1"
          variant="h1"
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "15px",
            marginTop: "200px",
            fontFamily: 'Revans,sans-serif',
            fontSize: '90px',
          }}
        >
          LOGIN
        </Typography>
        <Container component="main" maxWidth="xs">
        <form style={{backgroundColor: 'black'}} onSubmit={formik.handleSubmit}>
          <CssBaseline />

          <TextField
            style={{
              backgroundColor: "white",
              border: '2px solid #898e8e',
            }}
            margin="normal"
            required
            fullWidth
            {...formik.getFieldProps("email")}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            autoFocus
          />
          {formik.errors.email && formik.touched.email ? (
            <span>{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <TextField
            style={{ 
              backgroundColor: "white",
              border: '2px solid #898e8e',
            }}
            margin="normal"
            required
            fullWidth
            {...formik.getFieldProps("password")}
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="current-password"
          />
          {formik.errors.password && formik.touched.password ? (
            <span>{formik.errors.password}</span>
          ) : (
            <></>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={BtnConnexion}
          >
            Login
          </Button>

          <Button
            onClick={handleGoogleSignin}
            type="submit"
            fullWidth
            variant="contained"
            sx={BtnConnexion}
          >
            Sign In with Google
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href={"/ForgetPassword"} variant="body2" style={{ color: "white" }}>
                Forgot password ?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/CreateAccount"
                variant="body2"
                style={{ color: "white" }}
              >
                {"Create account"}
              </Link>
            </Grid>
          </Grid>
          </form>
        </Container>
      </ThemeProvider>
      <Footer/>
    </div>
  );
}
