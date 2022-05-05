import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Typography } from "@material-ui/core";
import AuthorizedContent from "./AuthorizedContent";

export default function MainContent() {
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <AuthorizedContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography variant="h4" className="card-title">Please sign-in to see your information.</Typography>
                </div>
            </UnauthenticatedTemplate>
        </div>
    );
}