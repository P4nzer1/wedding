import Lottie from 'lottie-react';
import { useTranslation, Trans } from 'react-i18next';

import { Typography, Stack, useTheme, Button, styled } from '@mui/material';

import Cat from '@/shared/assets/animations/catWithletter.json';
import { guestForm } from '@/shared/utils';

export const MobileQuestionnaire = () => {
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
        <Trans i18nKey="mobile.section.questionnaire.header" components={{ br: <br /> }} />
      </Typography>
      <Stack
        sx={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Typography
          textAlign="center"
          variant="body1"
          color={theme.palette.colorText.colorChocolate}
        >
          <Trans i18nKey="mobile.section.questionnaire.title" components={{ br: <br /> }} />
        </Typography>
        <Button sx={{ width: '60%' }} variant="rose" onClick={guestForm}>
          {t('buttons.guest-profile').toUpperCase()}
        </Button>
        <Lottie
          loop
          animationData={Cat}
          style={{
            width: 60,
            transform: 'scale(2.5)',
            transformOrigin: 'center',
            pointerEvents: 'none',
          }}
        />
        {questionnairePartKeys.map((partKey) => (
          <Stack key={partKey} direction="column" gap={2}>
            <Typography
              textAlign="center"
              variant="body1"
              color={theme.palette.colorText.colorChocolate}
            >
              <Trans
                i18nKey={`mobile.section.questionnaire.sub-title.${partKey}`}
                components={{ br: <br /> }}
              />
            </Typography>
          </Stack>
        ))}
        <Typography
          mt={3}
          textAlign="center"
          variant="h2ysabeauSc"
          color={theme.palette.colorText.colorWine}
        >
          {t('mobile.section.questionnaire.footer')}
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
  padding: theme.spacing(6, 4),
}));
