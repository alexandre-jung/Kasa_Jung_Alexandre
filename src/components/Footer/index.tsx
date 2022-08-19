import { KasaLogo } from '@/components/icons';
import styles from './styles.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer
      className={`${styles.footer} d-flex flex-col justify-content-center align-items-center ${className}`}
    >
      <KasaLogo className={`${styles.logo} small`} />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
