import * as React from 'react';
import { Sidebar } from '../Sidebar';
import { getPlayers } from '../../api';
import { parse } from 'query-string';
import { IPlayersProps, IPlayersState, ITeam } from '../Types';

export default class Players extends React.Component<IPlayersProps, IPlayersState> {
  constructor(props: IPlayersProps) {
    // if you have props in a class, you need a constructor to pass props to the parent
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

  fetchPlayers = (teamId?: ITeam): void => {
    getPlayers(teamId).then(players =>
      this.setState(() => ({
        loading: false,
        players
      }))
    );
  };

  render() {
    const { players, loading } = this.state;
    return (
      <div className="container two-column">
        <Sidebar loading={loading} title="Players" players={players.map(player => player.name)} {...this.props} />
        {loading === false && location.pathname === '/players' ? (
          <div className="sidebar-instruction">Select a PLayer</div>
        ) : null}
      </div>
    );
  }
}
