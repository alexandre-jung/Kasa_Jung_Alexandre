import { Navigate, useParams } from 'react-router';
import lodges from '@mock/logements.json';

const Lodge = () => {
  const { id } = useParams();
  const lodge = lodges.find((lodge) => lodge.id === id);

  return lodge ? (
    <div className="fs-large">Appartement {id}</div>
  ) : (
    <Navigate to="/not-found" />
  );
};

export default Lodge;
