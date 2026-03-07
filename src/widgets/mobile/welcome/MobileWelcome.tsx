import { Trans } from 'react-i18next';

import { Stack, Typography, useTheme, styled } from '@mui/material';

import background from '@/shared/assets/images/welcome/photoMobile.webp';

export const MobileWelcome = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Typography
        textAlign="center"
        variant="h1ysabeauSc"
        color={theme.palette.colorText.colorIvory}
      >
        <Trans i18nKey={'mobile.section.welcome.title'} components={{ br: <br /> }} />
      </Typography>
      <Typography
        textAlign="center"
        variant="h1greatVibes"
        color={theme.palette.colorText.colorIvory}
      >
        <Trans i18nKey={'mobile.section.welcome.sub-title'} components={{ br: <br /> }} />
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(() => ({
  backgroundImage: `url(${background})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'center',
}));
