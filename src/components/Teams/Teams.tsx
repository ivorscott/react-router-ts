/*tslint:disable: no-console*/

import * as React from 'react';
import { Sidebar } from '../Sidebar';
import { getTeamNames } from '../../api';
import { ITeamPageState, IPage } from '../_types';

export default class Home extends React.Component<IPage, ITeamPageState> {
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
    const { location } = this.props;

    return (
      <div className="container two-column">
        <Sidebar loading={loading} title="Teams" players={teamNames} {...this.props} />

        {loading === false && location.pathname === '/teams' ? (
          <div className="sidebar-instruction">Select a Team</div>
        ) : null}

        
      </div>
    );
  }
}
