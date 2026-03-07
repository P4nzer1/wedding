import Lottie from 'lottie-react';
import { useTranslation, Trans } from 'react-i18next';

import { Stack, Typography, CardMedia, useTheme, styled } from '@mui/material';

import Photo from '@/shared/assets/images/invite/photo.webp';

import Cat from '@/shared/assets/animations/LePetitChatCatNoir.json';
import { EVENT_DATE } from '@/shared/consts';
import { useCountdown } from '@/shared/hooks';
import { pad } from '@/shared/utils';

export const DesktopInvite = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT_DATE);

  return (
    <Wrapper>
      <LeftColumn>
        <Left>
          <CardMedia
            component="img"
            image={Photo}
            alt="Ну мы"
            sx={{
              height: 600,
              aspectRatio: 0.75,
              objectFit: 'cover',
              objectPosition: 'center bottom',
            }}
          />
          <Stack position="absolute" top="72%">
            <Lottie
              loop
              animationData={Cat}
              style={{ width: 100, transform: 'scale(1)', transformOrigin: 'center' }}
            />
          </Stack>
        </Left>
      </LeftColumn>
      <Right>
        <Typography
          textAlign="center"
          variant="h2greatVibes"
          color={theme.palette.colorText.colorWine}
          whiteSpace="nowrap"
        >
          {t('desktop.section.invite.title')}
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
          color={theme.palette.colorText.colorChocolate}
        >
          <Trans i18nKey="desktop.section.invite.sub-title" components={{ br: <br /> }} />
        </Typography>
        <Stack p={3} borderRadius={16} boxShadow={theme.shadows[3]}>
          <Typography
            textAlign="center"
            fontWeight={500}
            variant="h2greatVibes"
            color={theme.palette.colorText.colorWine}
          >
            {t('desktop.section.invite.date')}
          </Typography>
        </Stack>
        {!isExpired && (
          <Typography
            textAlign="center"
            variant="h2greatVibes"
            color={theme.palette.colorText.colorWine}
          >
            {pad(days)} : {pad(hours)} : {pad(minutes)} : {pad(seconds)}
          </Typography>
        )}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.colorBg.colorBeige,
  width: '100%',
  height: '100%',
  padding: theme.spacing(12, 8),
  alignItems: 'stretch',
  justifyContent: 'space-between',
  flexDirection: 'row',
  gap: theme.spacing(8),
}));

const LeftColumn = styled(Stack)(() => ({
  width: '50%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Left = styled(Stack)(({ theme }) => ({
  background: theme.palette.colorBase.colorWine,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 'fit-content',
  padding: theme.spacing(6, 4, 12, 4),
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const Right = styled(Stack)(({ theme }) => ({
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(8),
  width: '50%',
}));
