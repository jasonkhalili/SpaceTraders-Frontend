import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const Landing = (props) => {
    return(
        <>
            <Container maxWidth='md'>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {props.loans.map(loan => loan.due)}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
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