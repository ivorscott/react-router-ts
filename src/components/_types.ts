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
export interface ICustomLink {
  to: any;
  children: any;
}
export interface IPage {
  location: any;
  match: any;
}
export interface IPlayersPageState {
  players: IPlayerDetails[];
  loading: boolean;
}
export interface IHomePageState {
  teamNames: string[];
}
export interface ITeamPageState {
  teamNames: any[];
  loading: boolean;
  articles: any[];
}
export interface ITeamsState {
  teamNames: any[];
  loading: boolean;
}
export interface ITeamDetailsProps {
  id: string;
  children: any;
}
export interface ITeamDetailsState {
  team: any;
}
export interface ITeamProps {
  id: string;
  children: any;
}
export interface ITeamLogo {
  id: string;
}
