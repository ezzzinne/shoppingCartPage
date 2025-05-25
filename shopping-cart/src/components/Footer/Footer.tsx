import styles from './Footer.module.css';
import FacebookIcon from '../../assets/facebook-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.topRow}>
            <h3>Bandage</h3>
            <div className={styles.socialIcons}>
                <img src={FacebookIcon} alt="Facebook" />
                <img src={InstagramIcon} alt="Instagram" />
                <img src={TwitterIcon} alt="Twitter" />
            </div>
        </div>

        <div className={styles.linkGrid}>
            <div>
                <h5>Company Info</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Legal</h5>
                <ul>
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h5>Features</h5>
                <ul>
                    <li>Business Marketing</li>
                    <li>User Analytic</li>
                    <li>Live Chat</li>
                    <li>Unlimited Support</li>
                </ul>
            </div>
            <div>
                <h5>Resources</h5>
                <ul>
                    <li>IOS & Android</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                </ul>
            </div>
            <div className={styles.subscribe}>
                <h5>Get In Touch</h5>
                <div className={styles.inputWrapper}>
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
                <p>Lorem imp sum dolor Amit</p>
            </div>
        </div>

        <div className={styles.bottomNote}>
            <p>Made With Love By Finland All Right Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
