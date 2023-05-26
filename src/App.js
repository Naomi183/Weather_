import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorHandler from './components/ErrorHandler';
import NotificationComponent from './components/NotificationComponent';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LogIn from './components/LogIn';
import PasswordReset from './components/PasswordReset';
import UserProfile from './components/UserProfile';
import WeatherPage from './components/WeatherPage';
import DataAnalyticsComponent from './components/DataAnalyticsComponent';
import DataManagementComponent from './components/DataManagementComponent';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ErrorHandler>
          <ErrorBoundary>
            <NotificationComponent />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/password-reset" component={PasswordReset} />

            <PrivateRoute exact path="/profile" component={UserProfile} />
            <PrivateRoute exact path="/weather" component={WeatherPage} />
            <PrivateRoute exact path="/analytics" component={DataAnalyticsComponent} />
            <PrivateRoute exact path="/data-management" component={DataManagementComponent} />
          </ErrorBoundary>
        </ErrorHandler>
      </AuthProvider>
    </Router>
  );
}

export default App;
