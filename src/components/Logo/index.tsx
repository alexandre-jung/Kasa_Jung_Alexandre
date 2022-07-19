import { ReactComponent as SvgLogo } from '@img/logo.svg';
import styles from './styles.module.scss';

const Logo = ({ className = '' }) => (
  <SvgLogo className={`${styles.logo} ${className}`} />
);

export default Logo;
