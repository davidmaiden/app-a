import { AuthenticatedTemplate, useMsal } from "@azure/msal-react";
import Typography from "@material-ui/core/Typography";

export default function CurrentUser() {
    const msal = useMsal();
    return (
        <AuthenticatedTemplate>
            <Typography variant="h6">
                Hello {msal.instance.getAllAccounts()[0]?.name}
            </Typography>
        </AuthenticatedTemplate>
    );
}