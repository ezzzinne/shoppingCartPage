import styles from './Navbar.module.css';
import Toggle from '../../assets/toggle.svg';
import User from '../../assets/user-icon.svg';
import Search from '../../assets/search-icon.svg';
import Cart from '../../assets/cart-icon.svg';
import Heart from '../../assets/heart-icon.svg';
import Menu from '../../assets/menu-icon.svg';
import MobileSearch from '../../assets/mobile-search.svg';
import MobileCart from '../../assets/mobile-cart.svg';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return isMobile ? (
        <>
            <div className={styles.mobileContainer}>
                <div className={styles.mobileHeader}>
                    <div>
                        <h3>Bandage</h3>
                    </div>
                    <div className={styles.mobileIcons}>
                        <img src={MobileSearch} alt="search-icon" />
                        <img src={MobileCart} alt="cart-icon" />
                        <img src={Menu} alt="menu-icon" />
                    </div>
                </div>
                <div className={styles.mobileNavbar}>
                    <a href="#" className={styles.mobileNavItems}>Home</a>
                    <a href="#" className={styles.mobileNavItems}>Product</a>
                    <a href="#" className={styles.mobileNavItems}>Pricing</a>
                    <a href="#" className={styles.mobileNavItems}>Contact</a>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className={styles.container}>
                <div className={styles.sectionOne}>
                    <h3>Bandage</h3>
                </div>
                <div className={styles.sectionTwo}>
                    <div className={styles.links}>
                        <a href="#" className={styles.linkItem}>Home</a>
                        <a href="#" className={styles.linkItem}>Shop 
                            <span>
                                <img src={Toggle} alt="Toggle icon" />
                            </span>
                        </a>
                        <a href="#" className={styles.linkItem}>About</a>
                        <a href="#" className={styles.linkItem}>Blog</a>
                        <a href="#" className={styles.linkItem}>Contact</a>
                        <a href="#" className={styles.linkItem}>Pages</a>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.iconItems}>
                            <img src={User} alt="User-icon" />
                            <p>Login / Register</p>
                        </div>
                        <div className={styles.iconItems}>
                            <img src={Search} alt="search-icon" />
                        </div>
                        <div className={styles.iconItems}>
                            <img src={Cart} alt="cart-icon" />
                            <p>1</p>
                        </div>
                        <div className={styles.iconItems}>
                            <img src={Heart} alt="heart-icon" />
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar