import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
	auth: {
			clientId: "a032871b-8b5b-4075-9e06-e3a2020003c0",
			authority: "https://login.microsoftonline.com/9aaa3dd4-8e5d-4cd7-9db7-54f08a1c82d3",
			redirectUri: "https://prima-licensing-frontend.vercel.app/",
	},
	cache: {
		cacheLocation: "sessionStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
}
};

export const loginRequest:PopupRequest = {
	scopes: ["User.Read"]
};

/**
* Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
*/
export const graphConfig = {
	graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
