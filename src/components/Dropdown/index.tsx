import React, { useState } from 'react';
import { ReactComponent as SvgArrowUp } from '@img/arrow-up.svg';
import styles from './styles.module.scss';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  labelClassName?: string;
}

const Dropdown = ({
  label,
  labelClassName = '',
  children,
  ...otherProps
}: DropdownProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded((previous) => !previous);

  return (
    <div
      className={`${styles.dropdown} ${expanded ? 'expanded' : ''}`}
      {...otherProps}
    >
      <button className={styles.toggle} onClick={toggle}>
        <span className={labelClassName}>{label}</span>
        <SvgArrowUp className={styles.arrow} />
      </button>
      {expanded && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Dropdown;
