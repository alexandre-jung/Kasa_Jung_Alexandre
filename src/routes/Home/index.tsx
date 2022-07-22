import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Link from '@/components/Link';
import lodges from '@/mock/logements.json';
import routes from '@/routes';

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
      <div className="fs-large">Accueil</div>
      <Grid>
        {lodges.map((lodge) => (
          <div key={lodge.id} style={{ backgroundColor: 'saddlebrown' }}>
            <Link to={routes.lodge(lodge.id)} hover>
              Appartement {lodge.id}
            </Link>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
