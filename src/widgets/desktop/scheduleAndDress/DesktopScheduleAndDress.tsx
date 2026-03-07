import { Stack, styled } from '@mui/material';

import { DesktopDress } from './dress';
import { DesktopSchedule } from './schedule';

export const DesktopScheduleAndDress = () => {
  return (
    <Wrapper>
      <DesktopSchedule />
      <DesktopDress />
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.colorBg.colorWine,
  width: '100%',
  height: '100%',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  flexDirection: 'row',
  gap: theme.spacing(8),
  padding: theme.spacing(8, 8),
  '& > *': {
    flex: 1,
    minWidth: 0,
  },
}));
