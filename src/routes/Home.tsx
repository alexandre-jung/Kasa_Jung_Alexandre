import Link from '@/components/Link';
import lodges from '@/mock/logements.json';
import routes from '.';

const Home = () => {
  return (
    <div>
      <h1 className="fs-large">Accueil</h1>
      <ul className="list-unstyled">
        {lodges.map((lodge) => (
          <li key={lodge.id}>
            <Link to={routes.lodge(lodge.id)} hover>Appartement {lodge.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
