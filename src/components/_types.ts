export interface ICustomLink {
  to: any;
  children: any;
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
  num: number;
  avatar: string;
  apg: number;
  rpg: number;
  spg: number;
  ppg: number;
}
export interface IPage {
  location: any;
  match: any;
}
export interface IPlayersPageState {
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
export interface ITeamsPageState {
  teamNames: string[];
  loading: boolean;
}
export interface ITeamPageProps {
  id: string;
  children: any;
}
export interface ITeamPageState {
  team: any;
}
export interface ITeamLogo {
  id: string;
  width?: string;
}
