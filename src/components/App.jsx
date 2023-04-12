import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import MovieInfo from 'views/MovieInfo';

export default function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  );
}
