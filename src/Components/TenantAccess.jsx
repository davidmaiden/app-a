import { AccountInfo } from "@azure/msal-browser";
import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import Typography from "@material-ui/core/Typography";

export default function TenantAccess() {
    const msal = useMsal();

    return (
            <AuthenticatedTemplate>
                <Typography variant="h4">
                    You have access to {msal.instance.getAllAccounts()[0]?.idTokenClaims["permissions"]}
                </Typography>
            </AuthenticatedTemplate>
    );
}