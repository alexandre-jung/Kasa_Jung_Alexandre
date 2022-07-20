import React from 'react';
import { NavLink as RRNavLink, To } from 'react-router-dom';

interface NavLinkProps {
  to: To;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <RRNavLink
    to={to}
    className={({ isActive }) =>
      isActive ? 'no-decoration text-primary' : 'no-decoration text-gray-4'
    }
  >
    {children}
  </RRNavLink>
);

export default NavLink;
