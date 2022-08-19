import Grid from '@/components/Gallery';
import Hero from '@components/Hero';
import Link from '@components/Link';
import Thumbnail from '@components/Thumbnail';
import lodges from '@mock/logements.json';
import routes from '@routes';
import styles from './styles.module.scss';

const heading = (
  <span className="no-break">
    Chez vous, <br className="rwd-break" />
    partout et ailleurs
  </span>
);

const Home = () => {
  return (
    <div>
      <Hero background="coast" heading={heading} compact />
      <Grid className={styles.grid}>
        {lodges.map((lodge) => (
          <Link
            to={routes.lodge(lodge.id)}
            key={lodge.id}
            className={styles.link}
          >
            <Thumbnail cover={lodge.cover} title={lodge.title} height="100%" />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
