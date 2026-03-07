import { useTranslation, Trans } from 'react-i18next';

import { Button, Stack, Typography, useTheme, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

import background from '@/shared/assets/images/venue/mobileBg.jpg';

import { openMap } from '@/shared/utils';

export const MobileVenue = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Stack
        sx={{
          bgcolor: alpha(theme.palette.colorBg.colorBeige, 0.7),
          direction: 'column',
          gap: 4,
          p: 2,
        }}
      >
        <Typography
          textAlign="center"
          variant="h2ysabeauSc"
          color={theme.palette.colorText.colorChocolate}
        >
          <Trans i18nKey={'mobile.section.venue.sub-title'} components={{ br: <br /> }} />
        </Typography>
        <Button variant="wine" onClick={openMap}>
          {t('buttons.look-map').toUpperCase()}
        </Button>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(() => ({
  backgroundImage: `url(${background})`,
  width: '100%',
  height: '100%',
  backgroundRepeat: 'repeat-x',
  backgroundSize: 'auto 100%',
  backgroundPositionY: 'bottom',
  backgroundPosition: 'center 80%',
  justifyContent: 'center',
}));
