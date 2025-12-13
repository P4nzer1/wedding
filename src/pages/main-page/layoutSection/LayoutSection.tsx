import { Box } from '@mui/material';

import { WelcomeBlock, InviteBlock, ScheduleBlock, DressBlock } from '@/widgets';

const blocks = [WelcomeBlock, InviteBlock, ScheduleBlock, DressBlock];

export const LayoutSection = () => {
  return (
    <section role="main">
      {blocks.map((Block, id) => (
        <Box sx={{ height: '100vh' }} key={id}>
          <Block />
        </Box>
      ))}
    </section>
  );
};
