import { Layout } from './layout/Layout';

import { ThemeProvider } from '@/features';
import { withMui } from '@/mui';

const AppContent = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

const AppWithMui = withMui(AppContent);

const App = () => {
  return (
    <ThemeProvider>
      <AppWithMui />
    </ThemeProvider>
  );
};

export default App;
