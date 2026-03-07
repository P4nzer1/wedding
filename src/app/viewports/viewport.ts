type ViewportOptions = {
  useVisualViewport?: boolean;
  lockToMaxHeight?: boolean;
};

let maxViewportHeight = 0;

export const resetViewportHeightCache = () => {
  maxViewportHeight = 0;
};

export const setViewportHeightVar = ({
  useVisualViewport = true,
  lockToMaxHeight = false,
}: ViewportOptions = {}) => {
  const measuredViewportHeight = useVisualViewport
    ? Math.max(window.visualViewport?.height ?? 0, window.innerHeight)
    : window.innerHeight;
  const viewportHeight = lockToMaxHeight
    ? Math.max(maxViewportHeight, measuredViewportHeight)
    : measuredViewportHeight;

  if (lockToMaxHeight) {
    maxViewportHeight = viewportHeight;
  }

  document.documentElement.style.setProperty('--app-vh', `${viewportHeight * 0.01}px`);
};
