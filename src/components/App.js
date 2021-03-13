import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';

import Home from './Home';
import Header from './Header';
import Loans from './Loans';
import Ships from './Ships';

const username = 'KobeBryant';
const token = 'f3bb856d-7780-4b39-a9ef-f28d03d637ec';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const App = () => {

  const [credits, setCredits] = useState(0);
  const [loans, setLoans] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get(`https://api.spacetraders.io/users/${username}?token=${token}`)
        .then(res => {
            setCredits(res.data.user.credits);
            setLoans(res.data.user.loans);
            setShips(res.data.user.ships);
        })
  }, [])
  
    return (
      <>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header credits={credits} />

            <Switch>
              <Route path="/loans">
                <Loans 
                  username={username}
                  token={token}
                />
              </Route>
              <Route path="/ships">
                <Ships 
                  username={username}
                  token={token}
                />
              </Route>
              <Route path="/">
                <Home
                  username={username}
                  token={token}
                  loans={loans}
                  ships={ships}
                />
              </Route>
            </Switch>
          </ThemeProvider>
        </Router>
      </>
    )
}

export default App;
