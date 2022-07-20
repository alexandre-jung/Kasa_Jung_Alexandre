import Logo from '../Logo';
import styles from './styles.module.scss';

// TODO replace links

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div
      className={`${styles.header} d-flex justify-content-between align-items-center ${className}`}
    >
      <Logo className={styles.logo} />
      <ul className={`list-unstyled d-flex ${styles.menu}`}>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </div>
  );
};

export default Header;
