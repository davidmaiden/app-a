import { AccountInfo } from "@azure/msal-browser";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import Typography from "@material-ui/core/Typography";

export default function CurrentTenant() {
    const msal = useMsal();

    return (       
            <AuthenticatedTemplate>
                <Typography variant="h4">
                    Tenant is {msal.instance.getAllAccounts()[0]?.idTokenClaims["appTenantId"]}
                </Typography>
            </AuthenticatedTemplate>
    );
}