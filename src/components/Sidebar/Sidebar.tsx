/* tslint:disable: no-console */

import * as React from 'react';
import * as slug from 'slug';
import { ISidebarProps } from '../_types';
import { CustomLink } from '../CustomLink';
import {Loading} from '../Loading';

export const Sidebar: React.SFC<ISidebarProps> = ({ title, list, loading, location, match }) => {
  return loading === true ? (
    <h1>
      <Loading text="Loading" />
    </h1>
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((player: any) => (
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
