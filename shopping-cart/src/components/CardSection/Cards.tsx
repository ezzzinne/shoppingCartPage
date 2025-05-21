import styles from './Cards.module.css';
import Image1 from '../../assets/image-1.svg';
import Image2 from '../../assets/image-2.svg';
import Image3 from '../../assets/image-3.svg';
import Image4 from '../../assets/image-4.svg';

const Cards = () => {
    return (
        <>
            <div className={styles.cardsContainer}>
                <div className={styles.imageWrapper}>
                    <img src={Image1} alt="Image 1" className={styles.image} />
                    <div className={styles.overlayText}>
                        <h6 className={styles.items}>5 Items</h6>
                        <h2>FURNITURE</h2>
                        <h6 className={styles.more}>Read More</h6>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={Image2} alt="Image 2" className={styles.image} />
                    <div className={styles.overlayText}>
                        <h6 className={styles.items}>5 Items</h6>
                        <h2>FURNITURE</h2>
                        <h6 className={styles.more}>Read More</h6>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={Image3} alt="Image 3" className={styles.image} />
                    <div className={styles.overlayText}>
                        <h6 className={styles.items}>5 Items</h6>
                        <h2>FURNITURE</h2>
                        <h6 className={styles.more}>Read More</h6>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={Image4} alt="Image 4" className={styles.image} />
                    <div className={styles.overlayText}>
                        <h6 className={styles.items}>5 Items</h6>
                        <h2>FURNITURE</h2>
                        <h6 className={styles.more}>Read More</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;