import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Divider, Typography, useTheme } from '@mui/material';

import WelcomeImage from '@shared/assets/images/11.jpg';

export const WelcomeBlock = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.colorBase.bgGradient,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <FavoriteIcon
        sx={{
          transform: 'scale(33, 48) translate(4%, 38%)',
          transformOrigin: 'center',
          color: theme.palette.colorBase.bgSecond,
        }}
      />
      <Typography
        variant="h2"
        color="cream"
        sx={{
          position: 'relative',
          whiteSpace: 'pre-line',
          textAlign: 'right',
          top: '13%',
          right: '20%',
        }}
      >
        МЫ {'\n'} ЖЕНИМСЯ
      </Typography>

      <Typography
        variant="h1"
        color="colorBeige"
        sx={{
          fontSize: '4em',
          position: 'relative',
          top: '25%',
          left: '11%',
          display: 'inline-flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          12
          <Divider sx={{ height: '5px', backgroundColor: theme.palette.colorBase.colorBeige }} />
        </Box>
        <Box>
          06
          <Divider sx={{ height: '5px', backgroundColor: theme.palette.colorBase.colorBeige }} />
        </Box>
        <Box>26</Box>
      </Typography>
      <Box
        component="img"
        src={WelcomeImage}
        alt="если что я в дс"
        sx={{
          position: 'absolute',
          top: '60%',
          left: '50%',
        }}
      />
    </Box>
  );
};
