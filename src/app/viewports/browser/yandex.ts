export const isYandexBrowser = () => /YaBrowser/i.test(navigator.userAgent);

export const setYandexSafeAreaFix = () => {
  if (!isYandexBrowser()) {
    return;
  }

  document.documentElement.style.setProperty('--safe-top', '0px');
};
