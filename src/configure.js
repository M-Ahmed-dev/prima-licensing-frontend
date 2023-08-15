import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "3624982a-f075-4ed9-9d03-cc284f9a5064",
    authority:
      "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    redirectUri: "http://localhost:3000", // Your app's redirect URL
  },
};

const pca = new PublicClientApplication(msalConfig);

export { pca }; // Export the pca instance

export default msalConfig;
