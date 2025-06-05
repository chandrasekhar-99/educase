import {Link} from 'react-router-dom'
import './index.css'

const SignPage = () => {
  return (
    <div className="sign-page-container">
      <div className="sign-page">
        <h1 className="sign-page-title">Sign In to your PopX account</h1>
        <p className='welcome-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form>
          <div className="sign-in-wrapper">
              <label htmlFor="email" className='sign-in-input-label'>Email address<span className='create-account-label-span'>*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email address"
                className="input-field"
              />
            </div>
            <div className="sign-in-wrapper">
              <label htmlFor="password" className='sign-in-input-label'>Password<span className='create-account-label-span'>*</span></label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              className="input-field"
            />
            </div>
        </form>
      
        <Link to="/account">
          <button type="button" className="sign-in-button">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default SignPage