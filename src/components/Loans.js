import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Loans = (props) => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spacetraders.io/game/loans?token=${props.token}`)
            .then(res => {
                setLoans(res.data.loans);
            })

        console.log(loans);
    }, [])

    return (
        <Container maxwidth="md">
            <Grid container spacing={6}>
                {loans.map(loan =>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    {loan.amount} credits
                                </Typography>
                                <Typography>
                                    {((loan.amount * loan.rate) / 100) + loan.amount} credits due in {loan.termInDays} days
                                </Typography>
                                <Typography>
                                    {loan.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Loans;