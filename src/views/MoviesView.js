import { useState, useEffect } from 'react';

import Api from 'Api/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const onSubmit = cerrentQuery => {
    setQuery(cerrentQuery);
  };
  useEffect(() => {
    if (query === '') return;

    Api.fetchInfoMovieByName(query).then(response =>
      setMovies(response.results),
    );
  }, [query]);

  return (
    <>
      <SearchForm handleSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
