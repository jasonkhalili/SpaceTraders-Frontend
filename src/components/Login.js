import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

const Login = (props) => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    const createAccount = () => {
        axios.post(`https://api.spacetraders.io/users/${username}/token`)
            .then(res => {
                setToken(res.data.token);
                props.createUser(username, token);
            })

        

    }
    
    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <Container maxwidth='md'>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <FormControl noValidate autoComplete="off">
                                <Typography variant="h6"color="textPrimary" gutterBottom>Create a new Account</Typography>
                                <TextField id="standard-basic" label="Username" onChange={handleChange}/>
                                <Button variant="contained" onClick={createAccount}>Submit</Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <CardContent>
                            <FormControl noValidate autoComplete="off">
                                <Typography variant="h6"color="textPrimary" gutterBottom>Sign in</Typography>
                                <TextField id="standard-basic" label="Username" />
                                <TextField id="standard-basic" label="Key" gutterBottom/>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;
