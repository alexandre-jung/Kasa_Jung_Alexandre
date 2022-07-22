import { ReactComponent as StarSvg } from '@img/star.svg';
import styles from './styles.module.scss';

interface StarProps {
  active?: boolean;
  className?: string;
}

const Star = ({ active, className = '' }: StarProps) => (
  <StarSvg
    className={`${styles.star} ${className} ${active ? 'active' : ''}`}
  />
);

export default Star;
