import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%"
    },
}));

const Market = (props) => {
    const classes = useStyles();

    const [systems, setSystems] = useState([]);
    const [locations, setLocations] = useState([]);

    const assignLocations = (name) => {
        let filtered = systems.filter(system => system.name === name);
        filtered = filtered[0].locations.map(location => location);

        setLocations(filtered);
    }

    useEffect(() => {
        axios.get(`https://api.spacetraders.io/game/systems?token=${props.token}`)
            .then(res => {
                setSystems(res.data.systems);
            })
    }, [])
    
    return (
        <Container maxWidth="md">
            <Grid container spacing={6} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">System</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            {systems.map(system => 
                                <MenuItem onClick={() => assignLocations(system.name)}>{system.name}</MenuItem>
                                )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
                {locations.map(system => 
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography>{system.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}               
            </Grid>
        </Container>
    )
}

export default Market;