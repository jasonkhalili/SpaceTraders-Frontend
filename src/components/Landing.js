import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    username: {
        marginBottom: '15px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    }
})

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

const Landing = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

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
                                    <Typography variant="h6">
                                        {ship.location}
                                    </Typography>
                                    <Typography variant="h6">
                                        Speed: {ship.speed}
                                    </Typography>
                                    <Typography variant="h6">
                                        Space Available: {ship.spaceAvailable}
                                    </Typography>
                                    <Typography variant="h6">
                                        Weapons: {ship.weapons}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    )
}

export default Landing;