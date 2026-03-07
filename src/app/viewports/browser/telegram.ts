type TelegramWindow = Window & {
  Telegram?: {
    WebApp?: unknown;
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
