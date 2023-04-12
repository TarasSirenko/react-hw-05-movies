import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import s from './SearchForm.module.css';

export default function SearchForm({ handleSubmit }) {
  const [query, setQuery] = useState('');
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
