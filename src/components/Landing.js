import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

const username = 'KobeBryant';
const token = 'c724bc98-826a-46fa-8e3b-908c7ceb4ba6';

const Landing = () => {
    const [credits, setCredits] = useState(0);
    const [loans, setLoans] = useState([]);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        console.log('getting');
        axios.get(`https://api.spacetraders.io/users/${username}?token=${token}`)
            .then(res => {
                setCredits(res.data.user.credits);
                setLoans(res.data.user.loans);
                setShips(res.data.user.ships);
            })
    }, [credits, loans.length, ships.length])

    return(
        <>
            <Container maxWidth='md'>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {credits}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {loans.map(loan => loan.due)}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {ships.map(ship => ship.class)}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Landing;