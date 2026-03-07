type TelegramWindow = Window & {
  Telegram?: {
    WebApp?: {
      setHeaderColor?: (color: string) => void;
      setBackgroundColor?: (color: string) => void;
    };
  };
};

export const isTelegramWebView = () => {
  const telegramWindow = window as TelegramWindow;

  return /Telegram/i.test(navigator.userAgent) || Boolean(telegramWindow.Telegram?.WebApp);
};

export const setTelegramSafeAreaFix = () => {
  document.documentElement.style.setProperty(
    '--safe-top',
    isTelegramWebView() ? '0px' : 'env(safe-area-inset-top)',
  );
};

export const setTelegramWebAppColors = (color = '#5f2a2a') => {
  const telegramWindow = window as TelegramWindow;
  const webApp = telegramWindow.Telegram?.WebApp;

  if (!webApp) {
    return;
  }

  webApp.setHeaderColor?.(color);
  webApp.setBackgroundColor?.(color);
};
