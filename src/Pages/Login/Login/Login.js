import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth/UseAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError, signInWithGoogle } = UseAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="email"
                            id="standard-basic" label="Your Email" variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            name="password"
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text" >New User? Please Register.</Button></NavLink>
                        <br />
                        {
                            loading && <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        }

                        <Button type="submit" sx={{ width: '25%', m: 1 }} variant="contained">Login</Button>
                    </form>
                    <Button onClick={handleGoogleSignIn} type="submit" sx={{ width: '25%', m: 1 }} variant="text">Google Sign in</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;