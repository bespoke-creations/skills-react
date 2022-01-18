import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Layout from 'src/Layout';
import HomeView from 'src/views/HomeView';
import ContactUsView from 'src/views/ContactUsView';

type Routes = {
  exact?: boolean;
  path: string;
  component?: any;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Switch>
    {routes.map((route, i) => {
      const Component = route.component;

      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          render={(props: any) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      );
    })}
  </Switch>
);
  
const routes: Routes = [
  {
    exact: true,
    path: '/',
    component: HomeView
  },
  {
    exact: true,
    path: '/contact-us',
    component: ContactUsView
  }
];

export default routes;
  