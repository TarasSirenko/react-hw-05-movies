import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { RotatingLines } from 'react-loader-spinner';
import MovieInfoCard from 'components/MovieInfoCard/MovieInfoCard';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

// import Cast from 'components/Cast/Cast';
const Cast = lazy(() => import('components/Cast/Cast'));
// import Reviews from 'components/Reviews/Reviews';
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function MovieInfo() {
  const { path } = useRouteMatch();
  //   console.log(path);

  return (
    <>
      <GoBackBtn />
      <MovieInfoCard />
      <AdditionalInfo />
      <Suspense fallback={<RotatingLines strokeColor="#2196f3" />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
