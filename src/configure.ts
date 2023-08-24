import { Configuration, PopupRequest } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    // clientId: 'a032871b-8b5b-4075-9e06-e3a2020003c0',
    // authority:
    //   'https://login.microsoftonline.com/9aaa3dd4-8e5d-4cd7-9db7-54f08a1c82d3',
    // redirectUri: '/',

    clientId: "7d6dd56f-4029-4ca9-8e1e-f8f00105ba36",
    authority: "https://login.microsoftonline.com/a94280e2-26e6-4fe8-8355-50141de49f4a",
    redirectUri: "https://prima-licensing-frontend.vercel.app/",
    postLogoutRedirectUri: "https://tutors.fi",
    clientCapabilities: ["CP1"]
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const loginRequest: PopupRequest = {
  scopes: ['User.Read'],
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
