/* tslint:disable: no-console */

import * as React from 'react';
import * as slug from 'slug';
import { ISidebarProps } from '../Types';
import { CustomLink } from '../CustomLink';

export const Sidebar: React.SFC<ISidebarProps> = ({ title, players, loading, location, match }) => {
  return loading === true ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {players.map(player => (
          <CustomLink
            key={player}
            to={{
              pathname: `${match.url}/${slug(player)}`,
              search: location.search
            }}
          >
            {player.toUpperCase()}
          </CustomLink>
          // <div>{player.toUpperCase()}</div>
        ))}
      </ul>
    </div>
  );
};
