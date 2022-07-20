import React from 'react';
import { Link as RRLink, To } from 'react-router-dom';
import styles from './styles.module.scss';

interface LinkProps {
  to: To;
  children: React.ReactNode;
  hover?: boolean;
}

const Link = ({ to, children, hover }: LinkProps) => {
  return (
    <RRLink to={to} className={`${styles.link} ${hover ? styles.underline : ''}`}>
      {children}
    </RRLink>
  );
};

export default Link;
