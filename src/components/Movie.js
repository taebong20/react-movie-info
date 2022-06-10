import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ coverImg, title, genres, summary, id }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
