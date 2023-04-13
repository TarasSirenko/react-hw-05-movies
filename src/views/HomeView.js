import { useEffect, useState } from 'react';

import Title from 'components/Title/title';
import MoviesList from 'components/MoviesList/MoviesList';
import Api from '../Api/Api.js';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    Api.fetchTrendingMovie().then(response => {
      setMovies(response.results);
    });
  }, []);
  return (
    <>
      <Title title={'Trending today'} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
