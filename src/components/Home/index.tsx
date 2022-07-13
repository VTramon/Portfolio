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

      <div className={styles.home__image_container}>
        <div>
          <h2>Vitor Ramon</h2>

          <img src="/notebook.png" alt="notebook" width="700" />
        </div>
      </div>
    </section>
  )
}

export default Home
