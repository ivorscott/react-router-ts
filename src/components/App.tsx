import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Players } from './Players';
import { Teams } from './Teams';
import { PageNotFound } from './PageNotFound';
import { Navbar } from './Navbar';

const App: React.SFC = () => (
  <Router>
    <div>
      <Navbar />

      <Switch>
        {/* Route is responsible for rendering some UI when a location
       matches the route’s path */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
