import { IPublicClientApplication } from "@azure/msal-browser";
import { AuthenticatedTemplate, IMsalContext, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Button } from "@material-ui/core";
import { loginRequest } from "../Azure/authConfig";

export default function AuthenticationButton() {
    const { instance } = useMsal();

    const logoutRequest = {
        account: instance.getAllAccounts()[0],
        postLogoutRedirectUri: "https://lively-hill-0c12df703.3.azurestaticapps.net/" //"https://zonal-app.graypebble-a2d919ab.uksouth.azurecontainerapps.io"
        // idTokenHint: 
    }

    function handleLogin(instance: IPublicClientApplication) {
        instance.loginRedirect(loginRequest).catch(e => {
                console.error(e);
            });
    }

    function handleLogout(instance: IPublicClientApplication) {
        instance.logoutRedirect(logoutRequest).catch(e => {
            console.error(e);
        });
    }

    return (
        <div id="authentication">
            <AuthenticatedTemplate>
                <Button color="inherit" onClick={() => handleLogout(instance)}>Log Out</Button>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Button color="inherit" onClick={() => handleLogin(instance)}>Login</Button>
            </UnauthenticatedTemplate>
        </div>
    );
}