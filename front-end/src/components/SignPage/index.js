import {Link} from 'react-router-dom'
import './index.css'

const SignPage = () => {
  return (
    <div className="sign-page-container">
      <div className="sign-page">
        <h1 className="sign-title">Sign In to your PopX account</h1>
        <p className='welcome-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <input
          type="email"/>
        <input
          type="password"/> 
        <Link to="/account">
          <button type="button" className="sign-in-button">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default SignPage