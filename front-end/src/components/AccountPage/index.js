import './index.css';
import ProfileImg from '../../assets/Ellipse 114.png';  
import CamImg from '../../assets/Group 1585.svg';


const AccountPage = () => {
  return (
    <div className="account-page-container">
      <div className="account-page">
        <div className="account-title-container">
            <h1 className="account-title">Account Settings</h1>
          </div>
        <div className='account-sub-page'>
          
          <div className='profile-container'>
            <div className='profile-image-container'>
              <img src={ProfileImg} alt="Profile" className="profile-image" />
              <img src={CamImg} alt="Camera" className="camera-image" />
            </div>
            <div className='profile-details'>
              <p className="profile-name">Marry Doe <br /> <span className="profile-email">Marry@Gmail.Com</span></p>
            </div>
          </div>
          <p className='account-description'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          <hr className='account-hr'/>
          </div>
          
      </div>
    </div>
  );
}
export default AccountPage;