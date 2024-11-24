import React, { useEffect, useState } from 'react';
// Interfaces;
import ThemeProviderInterface from '@config/interfaces/ThemeProviderInterface.ts';
// Types;
import Theme from '@config/types/Theme.ts';
// Contexts;
import ThemeContext from '@contexts/ThemeContext.ts';


export const ThemeProvider: React.FC<ThemeProviderInterface> = ({ children }): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  const switchTheme = () => {
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }; 

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);
   
  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};
