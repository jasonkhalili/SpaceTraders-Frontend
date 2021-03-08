import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';

import Home from './Home';
import Header from './Header';
import Login from './Login';

const username = 'KobeBryant';
const token = 'c724bc98-826a-46fa-8e3b-908c7ceb4ba6';

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

        console.log(ships);
  }, [])
  
    return (
      <>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header credits={credits} />

            <Switch>
              <Route path="/">
                <Home
                  username={username}
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
