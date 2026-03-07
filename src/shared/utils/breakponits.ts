export const up = (breakpoint: number) => `@media (min-width:${breakpoint}px)`;

export const down = (breakpoint: number) => `@media (max-width:${breakpoint}px)`;
