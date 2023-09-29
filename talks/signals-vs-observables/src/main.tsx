import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'reveal.js/dist/reveal.css';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import App from './app/app';
import { RevealJSProvider } from 'react-revealjs-with-code-surfer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RevealJSProvider exposeToWindow>
      <App />
    </RevealJSProvider>
  </StrictMode>
);
