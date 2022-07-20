import { Navigate, useParams } from 'react-router';

const Lodge = () => {
  const params = useParams();
  const id = parseInt(params.id ?? '', 10);
  const isError = isNaN(id);

  return isError ? (
    <Navigate to="/not-found" />
  ) : (
    <div className="fs-large">Lodge {id}</div>
  );
};

export default Lodge;
