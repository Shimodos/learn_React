import { useParams, useNavigate } from 'react-router-dom';

function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
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
