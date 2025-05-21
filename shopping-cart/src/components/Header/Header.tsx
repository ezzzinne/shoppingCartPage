import styles from './Header.module.css';
import Phone from '../../assets/phone-icon.svg';
import Mail from '../../assets/mail-icon.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.firstItem}>
                    <div className={styles.item}>
                        <img src={Phone} alt="Phone icon" />
                        <p>(225) 555-0118</p>
                    </div>
                    <div className={styles.item}>
                        <img src={Mail} alt="Mail icon" />
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                <div className={styles.secondItem}>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </div>
                <div className={styles.thirdItem}>
                    <p>Follow Us  :</p>
                    <div>
                        <img src={Instagram} alt="" />
                        <img src={Youtube} alt="" />
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;