import { Route, useRouteMatch, Switch } from 'react-router-dom';

import MovieInfoCard from 'components/MovieInfoCard/MovieInfoCard';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export default function MovieInfo() {
  const { path } = useRouteMatch();
  //   console.log(path);

  return (
    <>
      <GoBackBtn />
      <MovieInfoCard />
      <AdditionalInfo />
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </>
  );
}
