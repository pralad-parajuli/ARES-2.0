if (typeof window !== 'undefined') {
  (window as Window & {CESIUM_BASE_URL?: string}).CESIUM_BASE_URL = '/cesiumStatic/';
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
