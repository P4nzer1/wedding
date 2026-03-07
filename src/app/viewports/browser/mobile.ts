export const isMobileBrowser = () => {
  const ua = navigator.userAgent;
  const isMobileUa = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
    ua,
  );

  // iPadOS may report itself as Macintosh, but still has touch points.
  const isIPadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;

  return isMobileUa || isIPadOS;
};
