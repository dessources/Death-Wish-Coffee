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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const theme = createTheme();

export default function CreateAccount() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>
      <Navbar />
      <div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h1"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                CREATE ACCOUNT
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  autoComplete="firstName"
                  autoFocus
                />
                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  autoComplete="lastName"
                  autoFocus
                />
                <TextField
                  style={{
                    backgroundColor: "white",
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  style={{
                    backgroundColor: "white",
                    marginBottom: '15px'
                }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="Password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel
                   control={
                    <Checkbox
                      style ={{
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
                  sx={{ mt: 3, mb: 2 }}
                >
                  CREATE
                </Button>
                <Link
                  href="/Login"
                  variant="body1"
                  style={{
                    color: "white",
                    paddingLeft: '20px'
                  }}
                >
                  Already have an account ? Click here to log in.
                </Link>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}
