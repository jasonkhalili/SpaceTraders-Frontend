import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';


const Landing = (props) => {
    return(
        <>
            <Container maxWidth='md'>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {props.credits}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {props.loans.map(loan => loan.due)}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {props.ships.map(ship => ship.class)}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Landing;