/* tslint:disable: no-console no-debugger */
import * as React from 'react';
import { Sidebar } from '../Sidebar';
import { Route, Link } from 'react-router-dom';
import { getPlayers } from '../../api';
import { parse } from 'query-string';
import * as slug from 'slug';
import { IPage, IPlayersPageState, IPlayerDetails } from '../_types';

export default class Players extends React.Component<IPage, IPlayersPageState> {
  constructor(props: IPage) {
    // If you extend Component you need a constructor and super(props)
    super(props);
    this.state = {
      players: [],
      loading: true
    };
  }

  componentDidMount() {
    const { location } = this.props;

    location.search ? this.fetchPlayers(parse(location.search).teamId) : this.fetchPlayers();
  }

  fetchPlayers = (teamId?: string): void => {
    getPlayers(teamId).then((players: IPlayerDetails[]) =>
      this.setState(() => ({
        loading: false,
        players
      }))
    );
  };

  render() {
    const { players, loading } = this.state;
    const { match, location } = this.props;
    return (
      <div className="container two-column">
        <Sidebar loading={loading} title="Players" list={players.map(player => player.name)} {...this.props} />
        {loading === false && location.pathname === '/players' ? (
          <div className="sidebar-instruction">Select a PLayer</div>
        ) : null}

        <Route
          path={`${match.url}/:playerId`}
          render={props => {
            const { playerId } = props.match.params;

            if (loading === true) {
              return null;
            }

            const selectedPlayer = players.find((player: IPlayerDetails) => slug(player.name) === playerId);

            const { name, avatar, position, num, teamId, ppg, apg, spg, rpg } = selectedPlayer as IPlayerDetails;

            return (
              <div className="panel">
                <img className="avatar" src={avatar} alt={`${name}'s avatar`} />
                <h2 className="medium-header" />
                <h3 className="header">#{num}</h3>
                <div className="row">
                  <ul className="info-list" style={{ marginRight: 80 }}>
                    <li>
                      Team
                      <div>
                        <Link style={{ color: '#68809a' }} to={`/${teamId}`}>
                          {teamId[0].toUpperCase() + teamId.slice(1)}
                        </Link>
                      </div>
                    </li>
                    <li>
                      Position
                      <div>{position}</div>
                    </li>
                    <li>
                      PPG
                      <div>{ppg}</div>
                    </li>
                  </ul>
                  <ul className="info-list">
                    <li>
                      APG
                      <div>{apg}</div>
                    </li>
                    <li>
                      SPG
                      <div>{spg}</div>
                    </li>
                    <li>
                      RPG
                      <div>{rpg}</div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
