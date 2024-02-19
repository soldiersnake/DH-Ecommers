import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <h1>Super Flash Sale <span>50% off</span></h1>
        </div>
    </div>
  )
}
