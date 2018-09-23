/*tslint:disable: no-console*/

import * as React from 'react';
import { Sidebar } from '../Sidebar';
import { getTeamNames } from '../../api';
import { Route, Link } from 'react-router-dom';
import { ITeamsState, IPage } from '../_types';
import { TeamLogo } from '../TeamLogo';
import { Team } from '../Team';

export default class Home extends React.Component<IPage, ITeamsState> {
  constructor(props: IPage) {
    super(props);
    this.state = {
      teamNames: [],
      loading: true
    };
  }

  componentDidMount() {
    getTeamNames().then((teamNames: string[]) => {
      this.setState(() => ({
        loading: false,
        teamNames
      }));
    });
  }

  render() {
    const { loading, teamNames } = this.state;
    const { location, match } = this.props;

    return (
      <div className="container two-column">
        <Sidebar loading={loading} title="Teams" players={teamNames} {...this.props} />

        {loading === false && location.pathname === '/teams' ? (
          <div className="sidebar-instruction">Select a Team</div>
        ) : null}

        <Route
          path={`${match.url}/:teamId`}
          render={props => (
            <div className="panel">
              <Team id={props.match.params.teamId}>
                {(team: any) =>
                  team === null ? (
                    <h1>LOADING</h1>
                  ) : (
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <TeamLogo id={team.id} />
                      <h1 className="medium-header">{team.name}</h1>
                      <ul className="info-list row">
                        <li>
                          Established
                          <div>{team.established}</div>
                        </li>
                        <li>
                          Manager
                          <div>{team.manager}</div>
                        </li>
                        <li>
                          Coach
                          <div>{team.coach}</div>
                        </li>
                      </ul>
                      <Link className="center btn-main" to={`/${match.params.teamId}`}>
                        {team.name} Team Page
                      </Link>
                    </div>
                  )
                }
              </Team>
            </div>
          )}
        />
      </div>
    );
  }
}
