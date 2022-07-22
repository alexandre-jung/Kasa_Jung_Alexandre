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
      <ul className="list-unstyled">
        {lodges.map((lodge) => (
          <li key={lodge.id}>
            <Link to={routes.lodge(lodge.id)} hover>
              Appartement {lodge.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
