import { Trans } from 'react-i18next'
import styles from './style.module.scss'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home__banner}>
        <h1>
          <Trans components={{ bold: <strong />, nextLine: <br /> }}>
            home_text
          </Trans>
        </h1>
      </div>
    </section>
  )
}

export default Home
