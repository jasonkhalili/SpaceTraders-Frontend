import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

const Market = (props) => {

    const [market, setMarket] = useState([]);

    useEffect(() => {
        if (props.location) {
            axios.get(`https://api.spacetraders.io/game/locations/${props.location}/marketplace?token=${props.token}`)
                .then(res => setMarket(res.data.planet.marketplace))
        }
    }, [props.location])

    console.log(market);

    return (
        <Container>
            {market.map(item =>
                <h1>{item.symbol}</h1>
            )}
        </Container>
    )
}

export default Market;