import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="project-money-guard">
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyles />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
