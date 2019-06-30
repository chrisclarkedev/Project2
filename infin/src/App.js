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
          <Link to="/">Home</Link>
          <a href="/#hero-pics">Heroes</a>
          <Link to="/search">
            <button>Search Hero</button>
          </Link>
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
