import React from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Routes from './routes/Routes';

import './App.css';

function App() {
  return (
      <Router>
        <div>
          <header className="App-header">
              <h1 className="heading">Wellcome2zero</h1>
          </header>
            <main>
                <Routes />
            </main>
            <nav className="nav">
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link--active"
                    exact
                    to="/">Home</NavLink>
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link--active"
                    exact
                    to="/history">History</NavLink>
            </nav>
        </div>
      </Router>
  );
}

export default App;
