import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Ships = (props) => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spacetraders.io/game/ships?token=${props.token}`)
            .then(res => {
                setShips(res.data.ships);
            })
            .then(console.log(ships))
    }, [])

    return (
        <Container maxWidth="md">
            <Grid container spacing={6}>
                {ships.map(ship =>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    {ship.type}
                                </Typography>
                                <Typography>
                                    {ship.class}
                                </Typography>
                                <Typography>
                                    {ship.manufacturer}
                                </Typography>
                                <Typography>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Ships;
