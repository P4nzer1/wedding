import { useTranslation, Trans } from 'react-i18next';

import { Box, Stack, Typography, useTheme, styled } from '@mui/material';

import { PawCatIcon } from '@shared/ui';

export const MobileDress = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Stack direction="column" gap={2} alignItems="center">
        <Typography
          textAlign="center"
          variant="h2greatVibes"
          color={theme.palette.colorText.colorIvory}
        >
          {t('mobile.section.dress.title')}
        </Typography>
        <PawCatIcon width={32} height={32} style={{ color: theme.palette.colorBase.colorRose }} />
      </Stack>
      <Stack direction="column" justifyContent="space-between" gap={3} height="100%" width="100%">
        <Typography textAlign="center" variant="body1" color={theme.palette.colorText.colorIvory}>
          <Trans i18nKey="mobile.section.dress.sub-title" components={{ br: <br /> }} />
        </Typography>

        <ColorsBlock>
          <Color bgcolor={theme.palette.colorBase.colorBeige} />
          <Color bgcolor={theme.palette.colorBase.colorRose} />
          <Color bgcolor={theme.palette.colorBase.colorWine} />
          <Color bgcolor={theme.palette.colorBase.colorChocolate} />
          <Color bgcolor={theme.palette.colorBase.colorBlack} />
        </ColorsBlock>

        <Typography textAlign="center" variant="body1" color={theme.palette.colorText.colorIvory}>
          <Trans i18nKey="mobile.section.dress.footer" components={{ br: <br /> }} />
        </Typography>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.colorBg.colorWine,
  overflow: 'hidden',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 4),
}));

const ColorsBlock = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
}));

const Color = styled(Box)(({ theme }) => ({
  margin: theme.spacing(-2, 0),
  width: '100%',
  height: 90,
  borderRadius: 48,
  boxShadow: theme.shadows[7],
}));
