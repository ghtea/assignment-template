import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react'

const theme = {
  colors: {
    main: '#61DAFB', /* change if needed */
  },
} as const;

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);