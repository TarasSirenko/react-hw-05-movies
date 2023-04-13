import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import s from './SearchForm.module.css';
import useSearchParams from 'hooks/useSearchParams';

export default function SearchForm({ handleSubmit }) {
  const [query, setQuery] = useSearchParams('query', '');
  const history = useHistory();
  const { url } = useRouteMatch();

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
    history.push(`${url}?query=${query}`);
  };
  const changeInpntValue = e => {
    setQuery(e.currentTarget.value);
  };
  return (
    <form className={s.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        value={query}
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={changeInpntValue}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};
