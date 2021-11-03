import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const Appointment = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-120px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant='h6' style={{ color: '#5CE7ED' }} sx={{ mb: 5 }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white', fontSize: 14 }} sx={{ my: 3 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia ipsum expedita. Aliquid ipsam ullam, cumque amet ratione vero consequatur.
                        </Typography>
                        <Button style={{ backgroundColor: '#47CDD8' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Appointment;