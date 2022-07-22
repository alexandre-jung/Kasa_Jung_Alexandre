import React from 'react';
import { Link as RRLink, To } from 'react-router-dom';
import styles from './styles.module.scss';

interface LinkProps {
  to: To;
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

const Link = ({ to, children, hover, className }: LinkProps) => {
  return (
    <RRLink
      to={to}
      className={`${styles.link} ${hover ? styles.underline : ''} ${className}`}
    >
      {children}
    </RRLink>
  );
};

export default Link;
