import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    loans: {
        marginBottom: '15px'
    }
}));

const postRequest = (username, token) => {
    axios.post(`https://api.spacetraders.io/users/${username}/loans?token=${token}`, {
        type: 'STARTUP',
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

const Loans = (props) => {
    const classes = useStyles();

    const [loans, setLoans] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spacetraders.io/game/loans?token=${props.token}`)
            .then(res => {
                setLoans(res.data.loans);
            })

        console.log(loans);
    }, [])

    return (
        <Container maxWidth="md">
            <Typography variant="h4" className={classes.loans}>Loans</Typography>
            <Grid container spacing={6}>
                {loans.map(loan =>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {loan.amount} credits
                                </Typography>
                                <Typography variant="body2">
                                    {((loan.amount * loan.rate) / 100) + loan.amount} credits due in {loan.termInDays} days
                                </Typography>
                                <Typography variant="body2">
                                    {loan.type}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => postRequest(props.username, props.token)}>Take out Loan</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Loans;