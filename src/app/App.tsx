import { useLayoutEffect } from 'react';

import { Layout } from './layout';
import { resetViewportHeightCache, setViewportHeightVar } from './viewports';
import {
  initTelegramWebApp,
  isMobileBrowser,
  isTelegramWebView,
  isYandexBrowser,
  setTelegramSafeAreaFix,
  setTelegramWebAppColors,
  setYandexSafeAreaFix,
} from './viewports/browser';

import { ThemeProvider } from '@/features';
import { withMui } from '@/mui';

const Content = () => <Layout />;
const AppWithMui = withMui(Content);

const App = () => {
  useLayoutEffect(() => {
    const shouldLockDynamicViewport = isMobileBrowser() || isTelegramWebView() || isYandexBrowser();
    const setViewport = () =>
      setViewportHeightVar({
        useVisualViewport: !shouldLockDynamicViewport,
        lockToMaxHeight: shouldLockDynamicViewport,
      });
    const handleOrientationChange = () => {
      resetViewportHeightCache();
      setViewport();
    };

    initTelegramWebApp();
    setTelegramSafeAreaFix();
    setTelegramWebAppColors();
    setYandexSafeAreaFix();
    setViewport();

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', setViewport);
    window.visualViewport?.addEventListener('resize', setViewport);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', setViewport);
      window.visualViewport?.removeEventListener('resize', setViewport);
    };
  }, []);

  return (
    <ThemeProvider>
      <AppWithMui />
    </ThemeProvider>
  );
};

export default App;
