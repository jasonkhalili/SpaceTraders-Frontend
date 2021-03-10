import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    username: {
        marginBottom: '15px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
}));


const dueDate = (dueDate) => {
    let due = Date.parse(dueDate) - Date.now();
    const sign = Math.sign(due);

    due = Math.abs(due);
    const days = Math.round(due / (60*60*24*1000));

    if (sign === 1) {
        // Loan is not due yet
        return `in ${days} days`;

    } else {
        // Loan is past due
        return `${days} days ago`;
    }
}

const Home = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    const purchaseFuel = () => {
        axios.post(`https://api.spacetraders.io/users/${props.username}/purchase-orders?token=${props.token}`, {
            shipId: 'ckm1lzmd382227xw89b0iouwwu',
            good: 'FUEL',
            quantity: 20
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <>
            <Container maxWidth='md'>
                <Typography variant="h4" className={classes.username}>
                    {props.username}
                </Typography>
                <Grid container spacing={6}>
                    {props.loans.map(loan =>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                                        {loan.type}
                                    </Typography>
                                    <Typography variant="h6">
                                        {loan.repaymentAmount} credits due {dueDate(loan.due)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                    {props.ships.map(ship =>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                        {ship.class} {bull} {ship.manufacturer}
                                    </Typography>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        {ship.type}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        {ship.location}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        Speed: {ship.speed}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                        Space Available: {ship.spaceAvailable}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary" gutterBottom>
                                        Weapons: {ship.weapons}
                                    </Typography>
                                    <Button variant="contained" onClick={() => purchaseFuel()}>Purhcase Fuel</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default Home;
