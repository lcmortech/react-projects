import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage.js';
import About from './components/About.js';
import Articles from './components/Articles.js';
import ArticlesList from './components/ArticlesList.js';
import NavBar from './NavBar.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="page-body">
            <Routes>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={About} exact />
              <Route path="/articles-list" component={ArticlesList} exact />
              <Route path="/articles/:name" component={Articles} exact />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
