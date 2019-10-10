import React from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from '../pages/LandingPage/LandingPage';
import History from '../pages/History/History';
import NotFound from '../pages/NotFound/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/history' component={History} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
