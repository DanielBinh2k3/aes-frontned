import { createRoot } from 'react-dom/client';
import App from './App'; // Import your root component
import './index.css';
import { Provider } from 'react-redux'; // Import Provider
import store from "./store";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from 'react-helmet-async';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  </Provider>
);
