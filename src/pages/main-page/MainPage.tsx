import { Typography } from '@mui/material';
import { Button } from '@mui/material';


export const MainPage = () => {
  return (
    <main style={{ backgroundColor: 'grey' }}>
      <Typography variant="p1" color="colorBeige">
        Hello everyone!
      </Typography>
      <Typography variant="p2" color="cream">
        Hello everypidor!
      </Typography>
      <Typography variant="h2" color="marsala">
        Text primary
      </Typography>
      <Typography variant="h3" color="colorText.wineBase">
        Text secondary!
      </Typography>
      <Button variant="wine">позвонить</Button>
    </main>
  );
};
