import ReactDOM from 'react-dom/client';
// Providers;
import { ThemeProvider } from '@providers/ThemeProvider.tsx';
// Components;
import { App } from '@app/App.tsx';
// Styles;
import '@styles/main.scss';
import '@styles/themes.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
