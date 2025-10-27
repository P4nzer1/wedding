import React from 'react';
import { Typography } from '@mui/material';
import { commonStyles } from '@styles/commonStyles';

export default function MainPage() {
    return (
        <main style={commonStyles.flexCenter}>
            <Typography variant='h1'>Default</Typography>
            <Typography variant='h2' color='text.primary'>Text Primary</Typography>
            <Typography variant='h3' color='text.secondary'>Text Secondary</Typography>
        </main>
    )
}