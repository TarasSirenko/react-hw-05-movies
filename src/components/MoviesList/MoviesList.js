import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
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
