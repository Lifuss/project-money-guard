import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="project-money-guard">
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer position={'top-right'}
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      progress={undefined}
      theme={'light'} />
          <GlobalStyles />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
