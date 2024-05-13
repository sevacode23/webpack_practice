import { createRoot } from 'react-dom/client';

import { App } from './screens/app';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(<App />);
