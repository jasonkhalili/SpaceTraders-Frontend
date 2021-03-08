import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 25
    },
    title: {
      flexGrow: 1,
    },
    credits: {
        border: '10px solid #262626',
        borderRadius: '20px',
        backgroundColor: '#262626'
    }
}));

const testFunction = () => {
    console.log("sup")
}

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="body2" className={classes.title}>
                        <span className={classes.credits}>{props.credits} credits</span>
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit">Ships</Button>
                    <Button color="inherit">Loans</Button>
                    <Button color="inherit">Other</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;