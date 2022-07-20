import React from 'react';
import { NavLink as RRNavLink, To } from 'react-router-dom';
import styles from './styles.module.scss';

const getCssClass = ({ isActive }: { isActive: boolean }) =>
  `${styles.link} ${isActive ? 'active' : ''}`;

interface NavLinkProps {
  to: To;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <RRNavLink to={to} className={getCssClass}>
      {children}
    </RRNavLink>
  );
};

export default NavLink;
