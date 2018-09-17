import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';
import { Players } from './Players';
import { Teams } from './Teams';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
        </div>
      </Router>
    );
  }
}

export default App;
