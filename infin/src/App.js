import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/">
            <img id="logo" src="http://oi68.tinypic.com/2hsahbm.jpg" alt="inflogo" />
          </Link>
          <nav>
            <a href="/#hero-pics">Heroes</a>
          </nav>
        </div>
      </header>
      <main>
        <Route path="/" exact render={() => <Home />} />
      </main>
    </div>
  );
}

export default App;
