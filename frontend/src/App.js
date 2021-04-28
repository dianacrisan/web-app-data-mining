import './App.css';
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={HomePage} exact />
        <Route path='/discover' component={HomePage} exact />
        <Route path='/learn' component={HomePage} exact />
        <Route path='/signin' component={SignInPage} exact />
        <Route path='/signup' component={SignUpPage} exact />
        {/* <Route component={NotFoundPage}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
