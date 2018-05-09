import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import routes from './routes';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <li>
          <NavLink to="/01" activeClassName="link--active">Hello World</NavLink>
        </li>
        <li>
          <NavLink to="/02" activeClassName="link--active">Movie List</NavLink>
        </li>
        <li>
          <NavLink to="/03" activeClassName="link--active">Favorite Movie</NavLink>
        </li>
        <li>
          <NavLink to="/04" activeClassName="link--active">Grocery List 1</NavLink>
        </li>
      </ul>
      <hr />
      {routes.map(route => (
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </React.Fragment>
  </Router>
);

export default App;
