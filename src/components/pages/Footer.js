import "./Footer.css"
import {Link} from 'react-router-dom';
import { FiFacebook,FiYoutube,FiInstagram,FiLinkedin } from 'react-icons/fi';

function Footer() {
  var date = new Date();
  return (
    <div className="footer_container">
      <div className="footer_heading">
        <h3 className="footer_logo">You-Learn</h3>
        <p className="footer_dec">
            Access courses from expert instructors around the world.
        </p>
      </div>
      <ul className="links">
        <li><Link to="/" className="link"><FiFacebook/></Link></li>
        <li><Link to="/" className="link"><FiYoutube/></Link></li>
        <li><Link to="/" className="link"><FiLinkedin/></Link></li>
        <li><Link to="/" className="link"><FiInstagram/></Link></li>
      </ul>
      <hr/>
      <div className="copyright">
        <p className="copyrightText">You-Learn ⓒ {date.getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer