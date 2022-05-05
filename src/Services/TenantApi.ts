import { msalInstance } from "../index"; 
import { protectedResources, tenantApiRequest } from "../Azure/authConfig";

export async function CallTenantApi(tenantId: string) {
    const account = msalInstance.getActiveAccount();

    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        ...tenantApiRequest,
        account: account
    });

    console.log(`Access token found: ${response.accessToken}`);

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(`${protectedResources.tenantapi.endpoint}${tenantId}`, options)
        .then(response => response.json())
        .catch(err => console.log(err));
}