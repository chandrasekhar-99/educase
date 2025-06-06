import {Link} from 'react-router-dom'
import './index.css'


const WelcomePage = () => {
  return (
    <div className='welcome-page-container'>
      <div className='welcome-page'>
        <div className='welcome-sub-page'>
        <h1 className='welcome-title'>Welcome to PopX</h1>
        <p className='welcome-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/create-account">
          <button type='button' className='welcome-create-account-button'>
            Create Account
          </button>
        </Link>
        <Link to="/sign-in">
          <button type='button' className='welcome-login-button'>
            Already Registered? Login
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;