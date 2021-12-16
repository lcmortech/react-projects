import logo from './logo.svg';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={HomePage} exact />
    </div>
    </Router>
  );
}

export default App;
