import { ReactComponent as StarSvg } from '@img/star.svg';
import styles from './styles.module.scss';

interface StarProps {
  active?: boolean;
  className?: string;
  small?: boolean;
}

const Star = ({ active, className = '', small }: StarProps) => (
  <StarSvg
    className={`${styles.star} ${className} ${active ? 'active' : ''} ${
      small ? 'small' : ''
    }`}
  />
);

export default Star;
