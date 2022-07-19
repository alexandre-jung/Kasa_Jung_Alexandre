import { ReactComponent as SvgLogo } from '@img/logo.svg';
import styles from './styles.module.scss';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => (
  <SvgLogo className={`${styles.logo} ${className}`} />
);

export default Logo;
