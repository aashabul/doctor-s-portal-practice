import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth/UseAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = UseAuth();
    if (loading) {
        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;