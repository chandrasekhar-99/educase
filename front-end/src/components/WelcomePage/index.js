import './index.css'


const WelcomePage = () => {
  return (
    <div className='welcome-page-container'>
      <div className='welcome-page'>
        <h1 className='welcome-title'>Welcome to PopX</h1>
        <p className='welcome-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button type='button' className='create-account-button'>
          Create Account
        </button>
        <button type='button' className='login-button'>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;