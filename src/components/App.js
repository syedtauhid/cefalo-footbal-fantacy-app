import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Players from './Players'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

export default function App() {
  return (
    <Router>
      <nav className="top-nav" role="menubar">
          <ul className="menu">
              <li>
                  <Link to="/" className="menu-item" activeClassName="active">Players</Link>
              </li>
              <li>
                <Link to="/about" exact={true} className="menu-item" activeClassName="active">About</Link>
              </li>
              <li>
                <Link to="/topics" exact={true} className="menu-item" activeClassName="active">Topics</Link>
              </li>
              <li>
                <Link to="/redux" exact={true} className="menu-item" activeClassName="active">Redux Example</Link>
              </li>
          </ul>
      </nav>
      <main id="mainContent">
          <Route exact path="/" component={Players} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/redux" component={TodoList} />
      </main>
    </Router>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function TodoList() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}