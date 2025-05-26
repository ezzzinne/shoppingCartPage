import styles from './Posts.module.css';
import Post1 from '../../assets/post 1.jpg';
import Post2 from '../../assets/post 2.jpg';
import Post3 from '../../assets/post 3.jpg';
import Clock from '../../assets/clock.svg';
import Comments from '../../assets/comments.svg';
import Arrow from '../../assets/arrow.svg';

const Posts = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h6>Practice Advice</h6>
                    <h2>Featured Posts</h2>
                </div>
                <div className={styles.postContainer}>
                    <div className={styles.featuresCard}>
                        <div className={styles.featuresImageWrapper}>
                            <img src={Post1} alt="Post1" className={styles.featuresImage} />
                            <span className={styles.badge}>NEW</span> 
                        </div>
                        <div className={styles.featuresContent}>
                            <div className={styles.tags}>
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className={styles.featuresTitle}>Loudest à la Madison #1 (L'integral)</h4>
                            <p className={styles.featuresDesc}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className={styles.timeStamp}>
                                <div className={styles.time}>
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className={styles.comment}>
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className={styles.learnMore}>
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.featuresCard}>
                        <div className={styles.featuresImageWrapper}>
                            <img src={Post2} alt="Post2" className={styles.featuresImage} />
                            <span className={styles.badge}>NEW</span> 
                        </div>
                        <div className={styles.featuresContent}>
                            <div className={styles.tags}>
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className={styles.featuresTitle}>Loudest à la Madison #1 (L'integral)</h4>
                            <p className={styles.featuresDesc}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className={styles.timeStamp}>
                                <div className={styles.time}>
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className={styles.comment}>
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className={styles.learnMore}>
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.featuresCard}>
                        <div className={styles.featuresImageWrapper}>
                            <img src={Post3} alt="Post3" className={styles.featuresImage} />
                            <span className={styles.badge}>NEW</span> 
                        </div>
                        <div className={styles.featuresContent}>
                            <div className={styles.tags}>
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className={styles.featuresTitle}>Loudest à la Madison #1 (L'integral)</h4>
                            <p className={styles.featuresDesc}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className={styles.timeStamp}>
                                <div className={styles.time}>
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className={styles.comment}>
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className={styles.learnMore}>
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;