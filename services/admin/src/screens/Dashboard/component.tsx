import { Box } from '@mui/material';
import React from 'react';
import Header from '../../lib/Components/Share/Header';

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOAD" subtitle='Aun no hay nada' />
            </Box>
        </Box>
    );
};

export default Dashboard;
