import routes from '@routes';
import { KasaLogo } from '@/components/icons';
import NavLink from '@components/NavLink';
import Link from '@components/Link';
import styles from './styles.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div
      className={`${styles.header} d-flex justify-content-between align-items-center ${className}`}
    >
      <Link to={routes.home()}>
        <KasaLogo className={styles.logo} />
      </Link>
      <ul className={`list-unstyled d-flex ${styles.menu}`}>
        <NavLink to={routes.home()}>Accueil</NavLink>
        <NavLink to={routes.about()}>A propos</NavLink>
      </ul>
    </div>
  );
};

export default Header;
