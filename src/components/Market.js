import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    market: {
        marginBottom: '15px'
    }
}));

const Market = (props) => {
    const classes = useStyles();

    const [market, setMarket] = useState([]);

    useEffect(() => {
        if (props.location) {
            axios.get(`https://api.spacetraders.io/game/locations/${props.location}/marketplace?token=${props.token}`)
                .then(res => setMarket(res.data.planet.marketplace))
        }
    }, [props])

    console.log(market);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" className={classes.market}>Market</Typography>
            <Grid container spacing={6}>
                {market.map(item =>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography>{item.symbol}</Typography>
                                <Typography>{item.pricePerUnit} credits</Typography>
                                <Typography>{item.quantityAvailable} units available</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>

        </Container>
    )
}

export default Market;