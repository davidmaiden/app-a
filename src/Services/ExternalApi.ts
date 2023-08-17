import { msalInstance } from "../index"; 
import { loginRequest, protectedResources } from "../Azure/authConfig";

export async function CallApi() {
    const account = msalInstance.getActiveAccount();

    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
    });

    console.log(`Access token found: ${response.accessToken}`);

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("x-tenantid", "1be4ef1c-921c-4075-a10f-9b74cb292e81");
 
    console.log(headers);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log(`Using id : ${account.localAccountId}`);
    
    return fetch(protectedResources.api.endpoint + account.localAccountId + "/profile", options)
        .then(response => console.log(response.json()))
        .catch(err => console.log(err));
}