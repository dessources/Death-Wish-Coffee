import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate.js";
import {useRouter} from 'next/router';
import Footer from "../components/Footer";
import { useMediaQuery } from "@mui/material";

const theme = createTheme();

export default function CreateAccount() {

  const onMobile = useMediaQuery("(max-width:768px)");

  const BtnCreate = {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const options = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(values)
    }
    await fetch(`${process.env.NEXT_AUTH_URL,"/api/auth/signup"}`,options)
      .then(res=>res.json())
      .then((data)=> {
        if(data)router.push(`${process.env.NEXT_AUTH_URL,"/Login"}`)
      })
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
            marginBottom: '20px',
            marginTop: '200px',
            fontFamily: 'Revans,sans-serif',
            fontSize: onMobile ? "50px" : "90px",
          }}
        >
          CREATE ACCOUNT
        </Typography>
        <Container component="main" maxWidth="xs">
        <form style={{
          backgroundColor: 'black',
          justifyContent: 'center',
          textAlign: 'center'
          }} onSubmit={formik.handleSubmit}>
          <CssBaseline />

          <TextField
            style={{
              backgroundColor: "white",
              border: '2px solid #898e8e',
            }}
            margin="normal"
            required
            fullWidth
            {...formik.getFieldProps("firstName")}
            id="firstName"
            name="firstName"
            placeholder="First Name"
            autoComplete="firstName"
            autoFocus
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <span>{formik.errors.firstName}</span>
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
            {...formik.getFieldProps("lastName")}
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            autoComplete="lastName"
            autoFocus
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <span>{formik.errors.lastName}</span>
          ) : (
            <></>
          )}
          <TextField
            style={{
              backgroundColor: "white",
            }}
            margin="normal"
            required
            fullWidth
            {...formik.getFieldProps("email")}
            id="email"
            name="email"
            placeholder="Email Address"
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
              marginBottom: "15px",
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
          <FormControlLabel
          style={{
            textAlign: 'center',
            fontSize: '5px'
          }}
            control={
              <Checkbox
                style={{
                  color: "gray",
                }}
                value="cryon"
              />
            }
            label="I would like to receive email newsletters from DWC. See Privacy Policy and Terms of Service"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={BtnCreate}
          >
            CREATE
          </Button>
          <Link
            href="/Login"
            variant="body1"
            style={{
              color: "white",
              fontSize: onMobile ? "14px" : "17px",
              justifyContent: 'center'
            }}
          >
            Already have an account ? Click here to log in.
          </Link>
          </form>
        </Container>
      </ThemeProvider>
      <Footer/>
    
    </div>
  );
}
