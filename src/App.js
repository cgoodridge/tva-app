
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ThreatListPage from './pages/ThreatListPage';
import MembersListPage from './pages/MembersListPage';
import ThreatPage from './pages/ThreatPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/threat-list" component={ThreatListPage} />
            <Route path="/members" component={MembersListPage} />
            <Route path="/timeline" component={ThreatListPage} />
            <Route path="/threat/:name" component={ThreatPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <p> &copy; Copyright TVA &infin; &infin;</p>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
