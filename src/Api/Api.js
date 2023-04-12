const KEY = 'bee84003116e0d7efbcdf8ada59f5536';
const BASE_URL = 'https://api.themoviedb.org';

function fetchTrendingMovie() {
  return fetch(
    `${BASE_URL}/3/trending/movie/day?api_key=${KEY}&language=en-US`,
  ).then(response => response.json());
}
function fetchInfoMovieById(id) {
  return fetch(`${BASE_URL}/3/movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => response.json(),
  );
}
function fetchCreditsInfoById(id) {
  return fetch(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`,
  ).then(response => response.json());
}
function fetchReviewsById(id) {
  return fetch(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`,
  ).then(response => response.json());
}
function fetchInfoMovieByName(query) {
  return fetch(`${BASE_URL}/3/search/movie?api_key=${KEY}&query=${query}`).then(
    response => response.json(),
  );
}

const Api = {
  fetchTrendingMovie,
  fetchInfoMovieById,
  fetchCreditsInfoById,
  fetchReviewsById,
  fetchInfoMovieByName,
};

export default Api;
