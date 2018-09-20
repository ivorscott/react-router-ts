/*tslint:disable: no-console*/

import * as React from 'react';
import { Sidebar } from '../Sidebar';
import { getTeamNames } from '../../api';
import { Route } from 'react-router-dom';
import { ITeamsPageState, IPage } from '../_types';
import { TeamLogo } from '../TeamLogo';
import { Team } from '../Team';

export default class Home extends React.Component<IPage, ITeamsPageState> {
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
                    <div style={{ width: '110%', textAlign: 'center' }}>
                      <TeamLogo id={team.id} />
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
