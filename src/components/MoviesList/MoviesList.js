import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies, query }) {
  if (movies && movies.length === 0) {
    return <h3>{`No movie for "${query}", sorry`}</h3>;
  }
  return (
    <ul className={s.moviesList}>
      {movies &&
        movies.map(({ title, id }) => {
          return (
            <Link to={`/movies/${id}`} key={id} className={s.link}>
              <li className={s.moviesItem}>{title}</li>
            </Link>
          );
        })}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
};
