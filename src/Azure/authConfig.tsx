/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Configuration, EndSessionRequest, LogLevel } from "@azure/msal-browser";

export const deployment = {
    policyPrefix : "",
    b2cTenantName: "zonaltest",
    b2cTenantId: "98b3633f-081d-4fa6-840f-ba91822ea382",
    b2cClientId: "0c8521e3-755b-4ce8-92b8-b2b9d19e9262"
}

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signIn: `B2C_1A_${deployment.policyPrefix}SIGNIN`,
        forgotPassword: `b2c_1_${deployment.policyPrefix}passwordreset`,
        editProfile: `b2c_1_${deployment.policyPrefix}profileedit`,
        newTenant: `b2c_1_${deployment.policyPrefix}newTenant`  
    },
    authorities: {
        signIn: {
            authority: `https://${deployment.b2cTenantName}.b2clogin.com/${deployment.b2cTenantId}/B2C_1A_${deployment.policyPrefix}SIGNIN`
        },
        forgotPassword: {
            authority: `https://${deployment.b2cTenantName}.b2clogin.com/${deployment.b2cTenantId}/b2c_1_${deployment.policyPrefix}passwordreset`
        },
        editProfile: {
            authority: `https://${deployment.b2cTenantName}.b2clogin.com/${deployment.b2cTenantId}/b2c_1_${deployment.policyPrefix}profileedit`
        },
        newTenant: {
            authority: `https://${deployment.b2cTenantName}.b2clogin.com/${deployment.b2cTenantId}/b2c_1_${deployment.policyPrefix}newTenant`
        }        
    },
    authorityDomain: `${deployment.b2cTenantName}.b2clogin.com`
}

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig: Configuration = {
    auth: {
        clientId: deployment.b2cClientId, // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signIn.authority, // Use a sign-up/sign-in user-flow as a default authority
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: "http://localhost:3000", // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
        postLogoutRedirectUri: "http://localhost:3000", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
 export const protectedResources = {
    api: {
        endpoint: "https://localhost:7174/weatherforecast",
        scopes: [
            //"https://zonaltest.onmicrosoft.com/438a835a-de6b-4424-b832-dd0f21bb2ead/.default"
            "https://zonaltest.onmicrosoft.com/438a835a-de6b-4424-b832-dd0f21bb2ead/read_access"
        ], // e.g. api://xxxxxx/access_as_user "https://zonaltest.onmicrosoft.com/newapi/access_as_user"
    },
    tenantapi: {
        endpoint: "https://localhost:7174/api/tenant/",
        scopes: [
            //"https://zonaltest.onmicrosoft.com/438a835a-de6b-4424-b832-dd0f21bb2ead/.default"
            "https://zonaltest.onmicrosoft.com/438a835a-de6b-4424-b832-dd0f21bb2ead/read_access"
        ], // e.g. api://xxxxxx/access_as_user "https://zonaltest.onmicrosoft.com/newapi/access_as_user"
    }
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [...protectedResources.api.scopes]
};

export const tenantApiRequest = {
    scopes: [...protectedResources.tenantapi.scopes]
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
    scopes: [...protectedResources.api.scopes],
    forceRefresh: false
};