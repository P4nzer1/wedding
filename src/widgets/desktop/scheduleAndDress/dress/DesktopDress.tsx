import { useTranslation, Trans } from 'react-i18next';

import { Box, Stack, Typography, useTheme, styled } from '@mui/material';

import { PawCatIcon } from '@shared/ui';

export const DesktopDress = () => {
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
          {t('desktop.section.scheduleAndDress.dress.title')}
        </Typography>
        <PawCatIcon width={32} height={32} style={{ color: theme.palette.colorBase.colorRose }} />
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        minHeight={0}
        width="100%"
        gap={2}
      >
        <Typography textAlign="center" variant="body1" color={theme.palette.colorText.colorIvory}>
          <Trans
            i18nKey="desktop.section.scheduleAndDress.dress.sub-title"
            components={{ br: <br /> }}
          />
        </Typography>

        <ColorsBlock>
          <Color bgcolor={theme.palette.colorBase.colorBeige} />
          <Color bgcolor={theme.palette.colorBase.colorRose} />
          <Color bgcolor={theme.palette.colorBase.colorWine} />
          <Color bgcolor={theme.palette.colorBase.colorChocolate} />
          <Color bgcolor={theme.palette.colorBase.colorBlack} />
        </ColorsBlock>

        <Typography textAlign="center" variant="body1" color={theme.palette.colorText.colorIvory}>
          <Trans
            i18nKey="desktop.section.scheduleAndDress.dress.footer"
            components={{ br: <br /> }}
          />
        </Typography>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  minHeight: 0,
  gap: theme.spacing(2),
  padding: theme.spacing(1, 0),
}));

const ColorsBlock = styled(Stack)(() => ({
  width: '100%',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 0,
}));

const Color = styled(Box)(({ theme }) => ({
  margin: theme.spacing(-2, 0),
  width: '100%',
  height: 100,
  borderRadius: 48,
  boxShadow: theme.shadows[7],
}));
