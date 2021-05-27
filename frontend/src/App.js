import './App.css';
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import ReportsPage from './pages/ReportsPage';
import AppDocumentationPage from './pages/AppDocumentationPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './components/NotFound';

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
        <Route path='/main' component={MainPage} exact />
        <Route path='/projects' component={ProjectsPage} exact />
        <Route path='/reports' component={ReportsPage} exact />
        <Route path='/documentation' component={AppDocumentationPage} exact />
        <Route path='/profile' component={ProfilePage} exact />
        <Route component={NotFound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
