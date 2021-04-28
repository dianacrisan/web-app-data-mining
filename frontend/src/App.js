import './App.css';
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={HomePage} exact />
        <Route path='/discover' component={HomePage} exact />
        <Route path='/learn' component={HomePage} exact />
        <Route path='/signin' component={SignInPage} exact />
        {/* <Route component={NotFoundPage}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
