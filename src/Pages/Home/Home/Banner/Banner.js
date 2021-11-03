import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../../images/bg.png'
import chair from '../../../../images/chair.png'
import { Button, Typography, Container, Box } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    // border: '1px solid green'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: '300', color: 'gray', my: 3 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod odio error nihil animi ad similique assumenda repudiandae voluptatibus quasi beatae.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#47CDD8' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;