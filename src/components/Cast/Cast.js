import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Api/Api';
// import s from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const id = useParams().movieId;

  useEffect(() => {
    Api.fetchCreditsInfoById(id).then(({ cast }) => setActors(cast));
  }, [id]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(({ id, profile_path, name, character }) => {
            // console.log(actor);
            return (
              <li key={id}>
                <h3>{name}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  width="200px"
                  height="300px"
                />
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
