import { useTranslation, Trans } from 'react-i18next';

import { Button, Stack, Typography, useTheme, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

import background from '@/shared/assets/images/venue/desktopBg.jpg';

import { openMap } from '@/shared/utils';

export const DesktopVenue = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Typography
          textAlign="center"
          variant="h3ysabeauSc"
          color={theme.palette.colorText.colorChocolate}
        >
          <Trans i18nKey={'desktop.section.venue.sub-title'} components={{ br: <br /> }} />
        </Typography>
        <Button variant="wine" onClick={openMap} sx={{ width: 300 }}>
          {t('buttons.look-map').toUpperCase()}
        </Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(() => ({
  backgroundImage: `url(${background})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'auto 100%',
  justifyContent: 'center',
}));

const Content = styled(Stack)(({ theme }) => ({
  background: alpha(theme.palette.colorBg.colorBeige, 0.7),
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, black 50%, black 40%, transparent 100%)',
  maskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 40%, transparent 100%)',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(5),
}));
