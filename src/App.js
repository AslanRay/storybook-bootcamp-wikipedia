import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home/Home';
import SearchPage from './pages/search/Search';
import NotFoundPage from './pages/notFound/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
