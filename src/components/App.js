import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlayerListView from './Players/PlayerListView';
import HomeView from './Home/HomeView';
// import Logo from '../../img/premier-league.png'

export default function App() {
  return (
    <Router>
      <nav className="top-nav" role="menubar">
          <ul className="menu">
              <li>
                  <img src='/img/premier-league.png' alt='logo' style={{maxWidth:'170px'}}/>
              </li>
              <li>
                  <Link to="/" className="menu-item">Home</Link>
              </li>
              <li>
                <Link to="/players" className="menu-item">Players</Link>
              </li>
          </ul>
      </nav>
      <main id="mainContent">
          <Route exact path="/" component={HomeView} />
          <Route exact path="/players" component={PlayerListView} />
      </main>
    </Router>
  )
}
