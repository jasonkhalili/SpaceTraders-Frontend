import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 20
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="body2" className={classes.title}>
                        {props.credits} credits
                    </Typography>
                    <Button color="inherit">Ships</Button>
                    <Button color="inherit">Loans</Button>
                    <Button color="inherit">Other</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;