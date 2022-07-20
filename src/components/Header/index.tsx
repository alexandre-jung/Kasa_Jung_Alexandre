import routes from '@/routes';
import NavLink from '@/components/NavLink';
import Logo from '@/components/Logo';
import styles from './styles.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div
      className={`${styles.header} d-flex justify-content-between align-items-center ${className}`}
    >
      <NavLink to={routes.home()}>
        <Logo className={styles.logo} />
      </NavLink>
      <ul className={`list-unstyled d-flex ${styles.menu}`}>
        <NavLink to={routes.home()}>Accueil</NavLink>
        <NavLink to={routes.about()}>A propos</NavLink>
      </ul>
    </div>
  );
};

export default Header;