import styles from './Testimonials.module.css';
import Star from '../../assets/star.svg';
import EmptyStar from '../../assets/empty-star.svg';
import ProfileImage from '../../assets/profile.svg';
import Img1 from '../../assets/img1.svg';
import Img2 from '../../assets/img2.svg';
import Img3 from '../../assets/img3.svg';
import Img4 from '../../assets/img4.svg';
import Img5 from '../../assets/img5.svg';
import Img6 from '../../assets/img6.svg';
import Img7 from '../../assets/img7.svg';
import Img8 from '../../assets/img8.svg';
import Img9 from '../../assets/img9.svg';

const Testimonial = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.testimonial}>
        <h3>What they say about us</h3>
        <img src={ProfileImage} alt="User" className={styles.profileImg} />
        <div className={styles.stars}>
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={EmptyStar} alt="empty star" />
        </div>
        <h6 className={styles.message}>
          Slate helps you see how many more days you need to work to reach your financial goal.
        </h6>
        <p className={styles.name}>Regina Miles</p>
        <h6 className={styles.role}>Designer</h6>
      </div>

      <div className={styles.gallery}>
        {[Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9].map((img, i) => (
          <img key={i} src={img} alt={`gallery-${i}`} className={styles.galleryImg} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
