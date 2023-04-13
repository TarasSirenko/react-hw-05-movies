import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function useSearchParams(param, initialValue) {
  const searchParams = new URLSearchParams(useLocation().search).get(
    `${param}`,
  );
  const [query, setQuery] = useState(() =>
    searchParams ? searchParams : `${initialValue}`,
  );
  return [query, setQuery];
}

useSearchParams.protoTypes = {
  param: PropTypes.string,
  initialValue: PropTypes.string,
};
