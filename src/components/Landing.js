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
    }
})

const formatDate = (dueDate) => {
    let date = new Date(dueDate).toString();
    date = date.split(' GMT');
    
    return date[0];
}

const Landing = (props) => {
    const classes = useStyles();

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
                                    <Typography>
                                        {loan.repaymentAmount} credits due
                                    </Typography>
                                    <Typography>
                                        Due {formatDate(loan.due)}
                                    </Typography>
                                    <Typography>
                                        {loan.type}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                    {props.ships.map(ship =>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textPrimary">
                                        {ship.type}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {ship.class}
                                    </Typography>
                                    <Typography>
                                        {ship.manufacturer}
                                    </Typography>
                                    <Typography>
                                        {ship.location}
                                    </Typography>
                                    <Typography>
                                        {ship.speed}
                                    </Typography>
                                    <Typography>
                                        {ship.cargo}
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