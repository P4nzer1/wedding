import { useTranslation } from 'react-i18next';

import { Stack, Typography, useTheme, styled, Divider } from '@mui/material';

const schedulePartKeys = ['part-one', 'part-two', 'part-free', 'part-four'] as const;

export const DesktopSchedule = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Typography
        textAlign="center"
        variant="h2greatVibes"
        color={theme.palette.colorText.colorIvory}
      >
        {t('desktop.section.scheduleAndDress.schedule.title')}
      </Typography>
      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', maxWidth: 920, mx: 'auto', gap: 8 }}
      >
        {schedulePartKeys.map((partKey) => (
          <Stack
            key={partKey}
            sx={{
              display: 'grid',
              width: 'fit-content',
              gridTemplateColumns: '100px 140px minmax(240px, 420px)',
              columnGap: 3,
              alignItems: 'center',
            }}
          >
            <Divider
              sx={{
                width: 100,
                height: 2,
                bgcolor: theme.palette.colorText.colorIvory,
                justifySelf: 'center',
              }}
            />
            <Typography
              variant="h3greatVibes"
              color={theme.palette.colorText.colorIvory}
              whiteSpace="nowrap"
            >
              {t(`desktop.section.scheduleAndDress.schedule.sub-title.${partKey}.time`)}
            </Typography>
            <Stack
              gap={1}
              direction="column"
              textAlign="left"
              justifyContent="center"
              alignItems="start"
              minWidth={0}
            >
              <Typography variant="body1" sx={{ color: theme.palette.colorText.colorIvory }}>
                {t(
                  `desktop.section.scheduleAndDress.schedule.sub-title.${partKey}.title`,
                ).toUpperCase()}
              </Typography>
              <Typography variant="body1" color={theme.palette.colorText.colorIvory}>
                {t(`desktop.section.scheduleAndDress.schedule.sub-title.${partKey}.sub-title`)}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: 0,
  overflow: 'hidden',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(4),
}));
