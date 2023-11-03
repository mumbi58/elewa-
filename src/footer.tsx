import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "./footer.css"; // Import the footer CSS

const Footer = () => {
    return (
        <div className="footer">
            {/* Headquarters section */}
            <div className="card-footer">
                <h3>Headquarters</h3>
                <h4><Link to="/headquarters">The Promenade, 19 General Mathenge Rd, Nairobi, Kenya</Link></h4>
            </div>

            {/* Contact section */}
            <div className="card-footer">
                <h3>Contact</h3>
                <a href="tel:+254789227755">T +254 78 92 27 755</a>
                <h4><Link to="/contact">E info@elewa.ke</Link></h4>
            </div>

            {/* Navigation links */}
            <div className="card-footer">
                <h3>Navigation</h3>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/social-impact">Social Impact</Link></li>
                <li><Link to="/invest">Invest</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>

            {/* Brands section */}
            <div className="card-footer">
                <h3>Brands</h3>
                <li><Link to="/elewa">Elewa</Link></li>
                <li><Link to="/italanta">Italanta</Link></li>
                <li><Link to="/labs">Venture Labs</Link></li>
            </div>

            {/* Additional navigation links */}
            <div className="card-footer">
                <h3>Navigation</h3>
                <li><Link to="/terms">Terms and Conditions</Link></li>
                <li><Link to="/cookies">Cookie Preferences</Link></li>
            </div>

            <div className="flex-container">
                <div className="logo"></div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
        </div>
        
    );
}

export default Footer;
