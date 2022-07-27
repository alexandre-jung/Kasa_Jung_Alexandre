import Logo from '@components/Logo';
import styles from './styles.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <div
      className={`${styles.footer} d-flex flex-col justify-content-center align-items-center ${className}`}
    >
      <Logo className={`${styles.logo} text-white small`} />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
