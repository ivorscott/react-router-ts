/* tslint:disable no-console */
import * as React from 'react';
import { TeamLogo } from '../TeamLogo';
import { Link } from 'react-router-dom';
import { getTeamNames } from '../../api';
import { IHomePageState } from '../_types';

export default class Home extends React.Component<IHomePageState> {
  state = {
    teamNames: []
  };

  componentDidMount() {
    getTeamNames().then(teamNames =>
      this.setState(() => ({
        teamNames
      }))
    );
  }

  render() {
    const { teamNames } = this.state;

    return (
      <div className="container">
        <h1 className="large-header">Hash History Basketball League</h1>
        <h3 className="header text-center">Select a team</h3>
        <div className="home-grid">
          {teamNames.map(id => (
            <div>
              <Link key={id} to={`/${id}`}>
                <TeamLogo id={id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
