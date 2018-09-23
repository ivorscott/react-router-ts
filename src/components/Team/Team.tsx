import * as React from 'react';
import { getTeam } from '../../api';
import { ITeamDetailsProps, ITeamDetailsState } from '../_types';

export default class Team extends React.Component<ITeamDetailsProps, ITeamDetailsState> {
  constructor(props: { id: string; children: any }) {
    super(props);
    this.state = {
      team: null
    };
  }

  componentDidMount() {
    this.fetchTeam(this.props.id);
  }

  componentDidUpdate(nextProps: any) {
    // Post render
    // Because we are not re-mounting the Teams Component and only passing
    // it new props, we need to go ahead and listen for that
    if (this.props.id !== nextProps.id) {
      // if something changed, fetchTeam
      this.fetchTeam(nextProps.id);
    }
  }

  fetchTeam = (id: string) => {
    this.setState(() => ({
      team: null
    }));

    getTeam(id).then((team: any) => this.setState(() => ({ team })));
  };

  render() {
    return this.props.children(this.state.team);
  }
}
