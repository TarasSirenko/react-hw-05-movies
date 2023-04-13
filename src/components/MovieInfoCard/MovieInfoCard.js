import s from './MovieInfoCard.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from 'Api/Api';

export default function MovieInfoCard() {
  const [movie, setMovie] = useState(null);

  const movieId = useParams().movieId;

  useEffect(() => {
    Api.fetchInfoMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={s.movieContainer}>
          <img
            className={s.movieImg}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width="300"
            height="480"
          />
          <div className={s.infoContainer}>
            <h2 className={s.movieName}>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Ganres</h3>
            <ul className={s.ganresList}>
              {movie.genres.map(({ name, id }) => (
                <li key={id} className={s.ganresItem}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
