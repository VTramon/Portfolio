import styles from './style.module.scss'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home__banner}>
        <h1>
          Front end | Mobile
          <br />
          <strong>Developer</strong>
        </h1>
      </div>
    </section>
  )
}

export default Home
