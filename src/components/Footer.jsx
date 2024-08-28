import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoFooter from '../Images/logoFooter.png'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="image">
            <img src={logoFooter} alt="" />
        </div>
        <div className="links">
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/">Venue</Link></li>
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/">Contact us</Link></li>
            </ul>
        </div>
        
      </div>
      <div className="footer-buttom">
        <div className="container">
            <p>© 2021 | All rights reserved.</p>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
        </div>
      </div>
    </div>
  )
}
