import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    ships: {
        marginBottom: '15px'
    }
}));

const Ships = (props) => {
    const classes = useStyles();

    const [ships, setShips] = useState([]);

    const buyShip = (location, type) => {
        axios.post(`https://api.spacetraders.io/users/${props.username}/ships?token=${props.token}`, {
            location: `${location}`,
            type: `${type}`
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        console.log(props);
        axios.get(`https://api.spacetraders.io/game/ships?token=${props.token}`)
            .then(res => {
                setShips(res.data.ships);
            })
    }, [props])

    return (
        <Container maxWidth="md">
            <Typography variant="h4" className={classes.ships}>Ships</Typography>
            <Grid container spacing={6}>
                {ships.map(ship =>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    {ship.type}
                                </Typography>
                                <Typography>
                                    {ship.class}
                                </Typography>
                                <Typography>
                                    {ship.manufacturer}
                                </Typography>
                                <Typography>
                                    Max. Cargo: {ship.maxCargo}
                                </Typography>
                                <Typography>
                                    Plating: {ship.plating}
                                </Typography>
                                <Typography>
                                    Speed: {ship.speed}
                                </Typography>
                                <Typography gutterBottom>
                                    Weapons: {ship.weapons}
                                </Typography>
                                </CardContent>
                                    {ship.purchaseLocations.map(loc =>
                                        <>
                                            <CardContent>
                                                <Typography>
                                                    {loc.location}: {loc.price} credits
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" onClick={() => buyShip(loc.location, ship.type)}>Purchase</Button>
                                            </CardActions>
                                        </>
                                    )}
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Ships;
