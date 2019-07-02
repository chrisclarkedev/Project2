import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/">
            <img id="logo" src="http://oi68.tinypic.com/2hsahbm.jpg" alt="inflogo" />
          </Link>

        </div>
        <nav>
          <ul className="nav_links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#pic-section">Heroes</a></li>
            <li><Link to="/search">
              <button>Search Hero</button>
            </Link></li>
          </ul>
        </nav>

      </header>
      <main>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
      </main>
    </div>

  );
}

export default App;
