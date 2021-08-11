import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ExplorerContextProvider } from './Context/ExplorerContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ExplorerContextProvider>
        <App />
      </ExplorerContextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
