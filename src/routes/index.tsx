import { FC, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard';
// import { Repo } from '../pages/Repo';

const Dashboard = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "Dashboard" */
  '../pages/Dashboard'
))
const Repo = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "Repo" */
  '../pages/Repo'
))

export const Routes: FC = () => {
  return (
    <Suspense fallback={'Carregando'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" exact />
      </Switch>
    </Suspense>
  );
};