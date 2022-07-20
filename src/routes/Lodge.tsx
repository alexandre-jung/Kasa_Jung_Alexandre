import { Navigate, useParams } from 'react-router';

const Lodge = () => {
  const { id } = useParams();
  const isError = false;

  return isError ? (
    <Navigate to="/not-found" />
  ) : (
    <div className="fs-large">Appartement {id}</div>
  );
};

export default Lodge;
