import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { ICustomLink } from '../_types';

/* Change the style of a link */
export function CustomLink(props: ICustomLink) {
  const { to, children } = props;
  /*
      Route | has a built in location checker which we want
      to use to determine the style for the particular link
  
      render: prop | allows for convenient inline rendering 
      and wrapping, when the location matches
  
      chrildren: prop | it works exactly like render except that
      it gets called whether there is a match or not.
    */
  return (
    <Route
      path={to.pathname}
      children={({ match }) => (
        <li style={{ listStyleType: 'none', fontWeight: match ? 'bold' : 'normal' }}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  );
}
