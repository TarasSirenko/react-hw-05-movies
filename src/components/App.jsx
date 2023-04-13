import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
// import HomeView from 'views/HomeView';
// import MoviesView from 'views/MoviesView';
// import MovieInfo from 'views/MovieInfo';
const HomeView = lazy(() => import('views/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView'));
const MovieInfo = lazy(() => import('views/MovieInfo'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<RotatingLines strokeColor="#2196f3" />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieInfo />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
