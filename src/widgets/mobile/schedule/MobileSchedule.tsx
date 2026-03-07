import { useTranslation } from 'react-i18next';

import { Stack, Typography, useTheme, styled, Divider } from '@mui/material';

const schedulePartKeys = ['part-one', 'part-two', 'part-free', 'part-four'] as const;

export const MobileSchedule = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Wrapper>
      <Typography variant="h2greatVibes" color={theme.palette.colorText.colorWine}>
        {t('mobile.section.schedule.title')}
      </Typography>
      <Stack sx={{ flex: 1, justifyContent: 'center' }}>
        <Stack spacing={5}>
          {schedulePartKeys.map((partKey) => (
            <Stack key={partKey} gap={0.5}>
              <Typography variant="h3greatVibes" sx={{ color: theme.palette.colorText.colorWine }}>
                {t(`mobile.section.schedule.sub-title.${partKey}.time`)}
              </Typography>
              <Typography variant="h2ysabeauSc" sx={{ color: theme.palette.colorText.colorWine }}>
                {t(`mobile.section.schedule.sub-title.${partKey}.title`).toUpperCase()}
              </Typography>
              <Typography variant="body1" color={theme.palette.colorText.colorWine}>
                {t(`mobile.section.schedule.sub-title.${partKey}.sub-title`)}
              </Typography>
              <Divider color={theme.palette.colorText.colorWine} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.colorBg.colorBeige,
  overflow: 'hidden',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 4),
}));
