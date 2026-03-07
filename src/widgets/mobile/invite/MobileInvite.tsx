import Lottie from 'lottie-react';
import { useTranslation, Trans } from 'react-i18next';

import { Stack, Typography, CardMedia, useTheme, styled } from '@mui/material';

import Photo from '@/shared/assets/images/invite/photo.webp';

import Cat from '@/shared/assets/animations/LePetitChatCatNoir.json';

export const MobileInvite = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Wrapper>
      <Typography
        textAlign="center"
        variant="h2greatVibes"
        color={theme.palette.colorText.colorWine}
        whiteSpace="nowrap"
      >
        {t('mobile.section.invite.title')}
      </Typography>
      <Typography textAlign="center" variant="body1" color={theme.palette.colorText.colorChocolate}>
        <Trans i18nKey="mobile.section.invite.sub-title" components={{ br: <br /> }} />
      </Typography>
      <Stack p={1.5} borderRadius={16} boxShadow={theme.shadows[3]}>
        <Typography
          textAlign="center"
          fontWeight={500}
          variant="h2greatVibes"
          color={theme.palette.colorText.colorWine}
        >
          {t('mobile.section.invite.date')}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        gap={3}
        sx={{
          bgcolor: theme.palette.colorBg.colorWine,
          alignItems: 'center',
          position: 'relative',
          p: theme.spacing(4, 2, 10, 2),
        }}
      >
        <CardMedia
          sx={{
            height: 300,
            aspectRatio: 0.75,
            objectFit: 'cover',
            objectPosition: 'center bottom',
          }}
          component="img"
          image={Photo}
          alt="Ну мы"
        />
        <Stack position="absolute" top="54%">
          <Lottie
            loop
            animationData={Cat}
            style={{ width: 100, transform: 'scale(1)', transformOrigin: 'center' }}
          />
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
  alignItems: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(6, 4),
}));
