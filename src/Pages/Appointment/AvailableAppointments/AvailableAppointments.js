import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00 AM - 09:00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09:00 AM - 10:00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10:00 AM - 11:00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Pendiatric Dental',
        time: '06:00 AM - 07:00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Pendiatric Dental',
        time: '06:00 AM - 07:00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07:00 AM - 08:00 AM',
        space: 10,
    },
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my: 3 }}>
                Available Appointments <span style={{ color: 'blue' }}>{date.toDateString()}</span></Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;