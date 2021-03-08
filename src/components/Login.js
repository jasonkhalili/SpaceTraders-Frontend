import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

const Login = () => {
    const classes = useStyles();

    return (
        <Container maxwidth='md'>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <Typography variant="h6"color="textSecondary" gutterBottom>Create a new Account</Typography>
                                <TextField id="outlined-basic" variant="outlined" label="Username" />
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <Typography variant="h6"color="textSecondary" gutterBottom>Sign in</Typography>
                                <TextField id="outlined-basic" variant="outlined" label="Username" />
                                <TextField id="outlined-basic" variant="outlined" label="Key" gutterBottom/>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;
