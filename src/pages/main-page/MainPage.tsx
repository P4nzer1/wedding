import { Typography } from '@mui/material';
import { Button } from '@mui/material';

export const MainPage = () => {
    return (
        <main>
            <Typography variant='h1'>Hello everyone!</Typography>
            <Typography variant='h2' color='colorBase.white'>Text primary</Typography>
            <Typography variant='h3' color='colorText.wineBase'>Text secondary!</Typography>
            <Button variant='wine'>позвонить</Button>
        </main>
    );
};