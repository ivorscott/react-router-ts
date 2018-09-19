export interface ICustomLink {
  to: any;
  children: any;
}
export interface ITeam {
  teamId: any;
}
export interface ISidebarProps {
  title: string;
  players: string[];
  loading: boolean;
  match?: any;
  location?: any;
}
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
export interface ICustomLink {
  to: any;
  children: any;
}
export interface IHomeState {
  teamNames: string[];
}
