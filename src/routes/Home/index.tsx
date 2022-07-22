import Link from '@/components/Link';
import lodges from '@/mock/logements.json';
import routes from '@/routes';

const Home = () => {
  return (
    <div>
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
