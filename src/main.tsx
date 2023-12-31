import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { msalConfig } from './configure';
import Layout from './Layout/Layout';
import theme from './theme/theme';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

const pca = new PublicClientApplication(msalConfig);

const queryClient = new QueryClient({});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <MsalProvider instance={pca}>
          <ChakraProvider theme={theme}>
            <Layout>
              <App />
            </Layout>
          </ChakraProvider>
        </MsalProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
);
