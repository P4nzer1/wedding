import Lottie from 'lottie-react';
import { useTranslation, Trans } from 'react-i18next';

import { Typography, Stack, useTheme, Button, styled } from '@mui/material';

import Cat from '@/shared/assets/animations/catWithletter.json';
import { guestForm } from '@/shared/utils';

export const DesktopQuestionnaire = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const questionnairePartKeys = ['part-one', 'part-two', 'part-free'] as const;

  return (
    <Wrapper>
      <Typography
        textAlign="center"
        variant="h2greatVibes"
        color={theme.palette.colorText.colorChocolate}
      >
        <Trans i18nKey="desktop.section.questionnaire.header" components={{ br: <br /> }} />
      </Typography>
      <Stack
        sx={{ flexDirection: 'column', justifyContent: 'center', gap: 4, alignItems: 'center' }}
      >
        <Typography
          textAlign="center"
          variant="body1"
          color={theme.palette.colorText.colorChocolate}
        >
          <Trans i18nKey="desktop.section.questionnaire.title" components={{ br: <br /> }} />
        </Typography>
        <Button sx={{ width: '60%' }} variant="rose" onClick={guestForm}>
          {t('buttons.guest-profile').toUpperCase()}
        </Button>
        <Lottie
          loop
          animationData={Cat}
          style={{ width: 60, transform: 'scale(2.5)', transformOrigin: 'center' }}
        />
        {questionnairePartKeys.map((partKey) => (
          <Stack key={partKey} direction="column" gap={2}>
            <Typography
              textAlign="center"
              variant="body1"
              color={theme.palette.colorText.colorChocolate}
            >
              <Trans
                i18nKey={`desktop.section.questionnaire.sub-title.${partKey}`}
                components={{ br: <br /> }}
              />
            </Typography>
          </Stack>
        ))}
        <Typography
          mt={4}
          textAlign="center"
          variant="h1ysabeauSc"
          color={theme.palette.colorText.colorWine}
        >
          {t('desktop.section.questionnaire.footer')}
        </Typography>
      </Stack>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.colorBg.colorBeige,
  overflow: 'hidden',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(8),
  padding: theme.spacing(12, 8),
}));
