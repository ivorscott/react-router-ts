export interface IPlayerDetails {
  name: string;
  position: string;
  teamId: string;
  number: number;
  avatar: string;
  apg: number;
  rpg: number;
  spg: number;
  ppg: number;
}

export interface IPlayersProps {
  location: any;
}

export interface IPlayersState {
  players: IPlayerDetails[];
  loading: boolean;
}
