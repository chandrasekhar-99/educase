import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AccountPage from './components/AccountPage';
import CreateAccountPage from './components/CreateAccountPage';
import SignPage from './components/SignPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={WelcomePage} />
        <Route path="/account" Component={AccountPage} />
        <Route path="/create-account" Component={CreateAccountPage} />
        <Route path="/sign-in" Component={SignPage} />
      </Routes>
    </Router>
  );
}


export default App;
