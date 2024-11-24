import { createContext } from 'react';
// Interfaces;
import ThemeContextInterface from '@config/interfaces/ThemeContextInterface.ts';


const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export default ThemeContext;
