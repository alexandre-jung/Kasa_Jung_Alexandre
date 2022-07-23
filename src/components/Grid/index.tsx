import styles from './styles.module.scss';

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className = '' }: GridProps) => {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
};

export default Grid;
