import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Trilogy from './components/Trilogy';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/">
            <img
              id="logo"
              src="https://i.ibb.co/ZB2XVk9/logo-hd.png"
              alt="inflogo"
            />
          </Link>
        </div>
        <nav>
          <ul className="nav_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#pic-section">Heroes</a>
            </li>
            <li>
              <Link to="/trilogy">Trilogy </Link>
            </li>
            <li>
              <Link to="/search">
                <button>Search Hero</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/trilogy" render={() => <Trilogy />} />
      </main>
    </div>
  );
}

export default App;
