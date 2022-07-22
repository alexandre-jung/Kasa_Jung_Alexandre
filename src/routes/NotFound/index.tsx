import Link from '@/components/Link';
import routes from '@/routes';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={`${styles.root}`}>
      <div>
        <div className={`text-primary ${styles.jumbo}`}>404</div>
        <p className={styles['help-text']}>
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <p>
          <Link to={routes.home()} className={styles.link} hover>
            Retourner à la page d&apos;accueil
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
