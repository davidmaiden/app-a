import { Button } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { CallApi } from "../Services/ExternalApi";
import { CallTenantApi } from "../Services/TenantApi";
import CurrentTenant from "./CurrentTenant";
import TenantAccess from "./TenantAccess";

export default function AuthorizedContent() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>        
            <CurrentTenant />
            <TenantAccess />
            <br />
            <Button color="inherit" onClick={async () => { await CallApi(); }}>Get the stuff</Button>
            <Button color="inherit" onClick={async () => { await CallTenantApi('HF1V76DG').then((r) => console.log(r)); }}>Call Tenant</Button>
        </div>
    );

}