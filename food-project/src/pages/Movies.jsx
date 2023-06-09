import { useParams, useNavigate, useLocation } from 'react-router-dom';

function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();
  const value2 = useLocation();

  console.log(value2);
  return (
    <>
      <h1>Some movie {id}</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}

export default Movies;
