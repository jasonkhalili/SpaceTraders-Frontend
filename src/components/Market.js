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


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "50%"
    },
}));

const Market = (props) => {
    const classes = useStyles();

    const [systemList, setSystemList] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spacetraders.io/game/systems?token=${props.token}`)
            .then(res => {
                setSystemList(res.data.systems);
            })
    }, [])

    console.log(systemList);
    
    return (
        <Container maxWidth="md">
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">System</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            {systemList.map(system => 
                                <MenuItem value={system.name}>{system.name}</MenuItem>
                                )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Market;