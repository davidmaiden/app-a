import { useMsal } from "@azure/msal-react";
import { Typography } from "@material-ui/core";

export default function AuthorizedContent() {
    const msal = useMsal();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant="h4" className="card-title">You are all logged in now!</Typography>
        </div> 
    );
}