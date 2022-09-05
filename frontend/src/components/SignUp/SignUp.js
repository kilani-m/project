import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as LinkR, useNavigate } from "react-router-dom";
import { register } from "../../JS/actions/userActions";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  

  const [email, setEmail] = React.useState("");
 
  const [password, setPassword] = React.useState("");

  
  const [fullName, setFullName] = React.useState("");
  
  const [dateNais, setDateNais] = React.useState("");
  
  const [role, setRole] = React.useState(["candidat"]);
  
  const [pic, setPic] = React.useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    console.log({
      email: email,
      password: password,
      fullName: fullName,
      dateNais: dateNais,
      role: role,
      pic: pic,
    });
    data.append("email", email)
    data.append("password", password)
    data.append("fullName", fullName)
    data.append("dateNais", dateNais)
    data.append("role", role)
    data.append("file", pic)
    
    dispatch(
      register(data,navigate)
      );
      
  };

  return (
    <div>
      <NavBar />
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="full Name"
                    autoFocus
                    onChange={(e)=>setFullName(e.target.value)}
                  />
                </Grid>
                
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    autoFocus
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="dateNais"
                    type="date"
                    id="dateNais"
                    label=""
                    autoComplete="new-date"
                    autoFocus
                    onChange={(e)=>setDateNais(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <select
                    style={{ width: 400, height: 60 }}
                    multiple={false}
                    value={role}
                    onChange={(e)=>setRole(e.target.value)}
                  >
                    <option value="candidat">Candidat</option>
                    <option value="formateur">Formateur</option>
                  </select>
                </Grid>
                <Grid item xs={12}>
                  {role === "formateur" ? (
                    <TextField
                      required
                      fullWidth
                      name="pic"
                      type="file"
                      id="pic"
                      label="Diplome"
                      autoComplete="file"
                      onChange={(e)=>setPic(e.currentTarget.files[0])}
                    />
                  ) : (
                    <div></div>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <LinkR to="/Login">Already have an account? Sign in</LinkR>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
