import { Trans } from 'react-i18next';

import { Stack, useTheme, styled, Typography } from '@mui/material';

import background from '@/shared/assets/images/welcome/photoDesktop.webp';

export const DesktopWelcome = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Content>
        <Typography
          textAlign="center"
          variant="h1ysabeauSc"
          color={theme.palette.colorText.colorIvory}
        >
          <Trans i18nKey={'desktop.section.welcome.title'} components={{ br: <br /> }} />
        </Typography>
        <Typography
          textAlign="center"
          variant="h1greatVibes"
          color={theme.palette.colorText.colorIvory}
        >
          <Trans i18nKey={'desktop.section.welcome.sub-title'} components={{ br: <br /> }} />
        </Typography>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(() => ({
  backgroundImage: `url(${background})`,
  width: '100%',
  height: '100%',
  backgroundSize: '100%',
  position: 'relative',
}));

const Content = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  top: '40%',
  position: 'absolute',
}));
