import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Players from './Players/Players';
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
                  <Link to="/" className="menu-item" activeclassname="active">Home</Link>
              </li>
              <li>
                <Link to="/players" className="menu-item" activeclassname="active">Players</Link>
              </li>
              <li>
                <Link to="/results" className="menu-item" activeclassname="active">Results</Link>
              </li>
          </ul>
      </nav>
      <main id="mainContent">
          <Route exact path="/" component={HomeView} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/results" component={Players} />
      </main>
    </Router>
  )
}
