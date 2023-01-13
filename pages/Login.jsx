import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate.js";

const theme = createTheme();

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/Account" });
  }

  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000/Account" });
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Typography
          component="h1"
          variant="h1"
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "50px",
          }}
        >
          LOGIN
        </Typography>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

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
            style={{ backgroundColor: "white" }}
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
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>

          <Button
            onClick={handleGoogleSignin}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In with Google
          </Button>

          <Button
            onClick={handleGithubSignin}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In with Github
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{ color: "white" }}>
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
        </Container>
      </ThemeProvider>
    </form>
  );
}
