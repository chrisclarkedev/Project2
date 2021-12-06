import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App2.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Trilogy from './components/Trilogy';
import Hero from './components/svg/mask-solid.svg';
import Logo from './components/images/logo_hd.png';
import HeroSearch from './components/HeroSearch';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="infin saga" />
          </Link>
        </div>
      </header>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#pic-section">Heroes</a>
          </li>
          <li>
            <Link to="/trilogy">Trilogy</Link>
          </li>
          <li>
            <div className="hero">
              <Link to="/herosearch">
                <img src={Hero} alt="" width="40" />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <main>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/trilogy" render={() => <Trilogy />} />
        <Route path="/herosearch" render={() => <HeroSearch />} />
      </main>
    </div>
  );
}

export default App;
