import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import WeatherPage from '../components/WeatherPage';
import LogIn from '../components/LogIn';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={WeatherPage} />
        <Route path="/login" component={LogIn} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
