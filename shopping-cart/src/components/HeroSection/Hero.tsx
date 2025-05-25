import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.overlay}>
          <h6 className={styles.subheading}>Designing Better Experience</h6>
          <h2 className={styles.title}>
            Problems trying to resolve <br /> the conflict between
          </h2>
          <p className={styles.description}>
            Problems trying to resolve the conflict between the two major <br /> realms of Classical physics
          </p>
          <h3 className={styles.price}>$16.48</h3>
          <button className={styles.button}>ADD YOUR CALL TO ACTION</button>
        </div>
    </section>
  );
};

export default Hero;
