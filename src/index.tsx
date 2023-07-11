import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './componetnts/App';
import { Root } from './Root';
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Root>
    <App/>
  </Root>
);

reportWebVitals();
