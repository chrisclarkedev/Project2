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
            <img id="logo" src="https://vignette.wikia.nocookie.net/logocomics/images/d/d5/Infinity_Gauntlet_%281991%29.png/revision/latest?cb=20150519180606" alt="inflogo" />
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
