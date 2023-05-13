function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={'https://placehold.jp/3d4070/ffffff/300x420.png?text={title}'}
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>

      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>
          {year} <span className="right"> {type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
