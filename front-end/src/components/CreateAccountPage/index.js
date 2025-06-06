import {Link} from 'react-router-dom'
import './index.css';

const CreateAccountPage = () => {
  return (
    <div className="create-account-page-container">
      <div className="create-account-page">
        <div className='create-account-sub-page'>
          <div>
        <h1 className="create-account-title">Create your PopX account</h1>
          <form>
            <div className="create-account-wrapper">
              <label htmlFor="name" className='create-account-input-label'>Full Name<span className='create-account-label-span'>*</span></label>
              <input
                type="text"
                id="name"
                placeholder="Enter Full Name"
                className="create-account-input-field"
              />
            </div>
            <div className="create-account-wrapper">
              <label htmlFor="mobile" className='create-account-input-label'>Phone number<span className='create-account-label-span'>*</span></label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter Phone Number"
                className="create-account-input-field"
              />
            </div>
            <div className="create-account-wrapper">
              <label htmlFor="email" className='create-account-input-label'>Email address<span className='create-account-label-span'>*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email address"
                className="create-account-input-field"
              />
            </div>
            <div className="create-account-wrapper">
              <label htmlFor="password" className='create-account-input-label'>Password<span className='create-account-label-span'>*</span></label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              className="create-account-input-field"
            />
            </div>
            <div className="create-account-wrapper">
              <label htmlFor="company-name" className='create-account-input-label'>Company name</label>
              <input
                type="text"
                id="company-name"
                placeholder="Enter Company name"
                className="create-account-input-field"
              />
            </div>
            <p className='radio-label'>Are you an agency?<span className='create-account-label-span'>*</span></p>
            <div className='create-account-radio-button-container'>
              <label><input
                type="radio"
                className="radio-input-field"
                name="agency"
                value="yes"
              />Yes</label>
              <label><input
                type="radio"
                className="radio-input-field"
                name="agency"
                value="no"
              />No</label>
            </div>
          </form>
          </div>
          <div>
            <Link to="/account">
              <button type="submit" className="create-account-button">Create Account</button>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;