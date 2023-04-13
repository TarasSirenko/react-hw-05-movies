import { useState, useEffect } from 'react';
import Api from 'Api/Api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import useSearchParams from 'hooks/useSearchParams';

export default function MoviesView() {
  const [query, setQuery] = useSearchParams('query', '');
  const [movies, setMovies] = useState(null);

  const onSubmit = cerrentQuery => {
    setMovies(null);
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
      {movies && <MoviesList movies={movies} query={query} />}
    </>
  );
}
