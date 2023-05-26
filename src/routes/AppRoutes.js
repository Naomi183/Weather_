import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default AppRoutes;
