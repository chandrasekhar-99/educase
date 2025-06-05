import {Link} from 'react-router-dom'
import './index.css';

const CreateAccountPage = () => {
  return (
    <div className="create-account-page-container">
      <div className="create-account-page">
        <h1 className="create-account-title">Create your PopX account</h1>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="input-field"
        />
        <input
          type="email" 
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="input-field"
        />
        <p>Are you an agency?</p>
        <label><input
          type="radio"
          className="input-field"
          name="agency"
          value="yes"
        />Yes</label>
        <label><input
          type="radio"
          className="input-field"
          name="agency"
          value="no"
        />No</label>
        <Link to="/account">
          <button type="button" className="create-account-button">Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccountPage;