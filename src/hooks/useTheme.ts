import { useContext } from 'react';
// Contexts;
import ThemeContext from '@contexts/ThemeContext.ts';


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('[Error] useTheme must not be used within an ThemeProvider.');
  }
  return context;
};
