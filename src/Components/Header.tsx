import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AuthenticationButton from './AuthenticationButton';
import CurrentUser from './CurrentUser';
import CurrentTenant from './CurrentTenant';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Test App A
                    </Typography>
                    <CurrentUser />
                    <AuthenticationButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}