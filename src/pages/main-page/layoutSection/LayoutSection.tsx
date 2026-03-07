import { Box, useMediaQuery, useTheme } from '@mui/material';

import type { SectionDesktop, SectionMobile } from '@/features/navigationMenu/types/types';

import {
  MobileWelcome,
  MobileInvite,
  MobileSchedule,
  MobileDress,
  MobileQuestionnaire,
  MobileVenue,
  DesktopWelcome,
  DesktopInvite,
  DesktopVenue,
  DesktopQuestionnaire,
  DesktopScheduleAndDress,
} from '@/widgets';

const mobileSections: SectionMobile[] = [
  { id: 'welcome', Component: MobileWelcome },
  { id: 'invite', Component: MobileInvite },
  { id: 'venue', Component: MobileVenue },
  { id: 'schedule', Component: MobileSchedule },
  { id: 'dress', Component: MobileDress },
  { id: 'questionnaire', Component: MobileQuestionnaire },
];

const desktopSections: SectionDesktop[] = [
  { id: 'welcome', Component: DesktopWelcome },
  { id: 'invite', Component: DesktopInvite },
  { id: 'venue', Component: DesktopVenue },
  { id: 'scheduleDress', Component: DesktopScheduleAndDress },
  { id: 'questionnaire', Component: DesktopQuestionnaire },
];

export const LayoutSection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  const sections = isDesktop ? desktopSections : mobileSections;
  const sectionHeight = isDesktop ? '100vh' : 'calc(var(--app-vh, 1svh) * 100)';
  const headerBaseHeight = isDesktop ? 80 : 60;
  const scrollMarginTop = `calc(${headerBaseHeight}px + var(--safe-top, 0px))`;

  return (
    <Box>
      {sections.map(({ Component, id }) => (
        <Box sx={{ height: sectionHeight, scrollMarginTop }} key={id} id={id}>
          <Component />
        </Box>
      ))}
    </Box>
  );
};
