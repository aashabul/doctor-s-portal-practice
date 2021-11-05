import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import loginImg from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth/UseAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, loading, authError } = UseAuth();
    const [open, setOpen] = React.useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
        console.log(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {
                        !loading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                                name="email"
                                id="standard-basic" label="Your Email" variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                                name="password"
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                                name="password2"
                                id="standard-password2-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text" >Already Registered? Please Login.</Button></NavLink>

                            <Button type="submit" sx={{ width: '25%', m: 1 }} variant="contained">Register</Button>
                        </form>
                    }
                    {
                        loading && <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        user?.email &&
                        <Alert severity="success" sx={{ width: '75%' }}>
                            Registered Successfully!
                        </Alert>
                    }
                    {authError && <Alert severity="error" sx={{ width: '75%' }}>
                        {authError}
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;