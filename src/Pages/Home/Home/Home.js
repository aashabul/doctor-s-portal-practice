import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointment from '../Appointment/Appointment';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;