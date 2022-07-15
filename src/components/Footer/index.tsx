import { GitHub, Instagram, LinkedIn, Twitter } from '../Icons'
import styles from './style.module.scss'

const Footer = () => {
  return (
    <>
      <div className={styles.footer__social_medias_container}>
        <ul className={styles.footer__social_medias}>
          <li>
            <a href="https://www.instagram.com/vitorr_rramon/" target="#blank">
              <Instagram />
            </a>
          </li>

          <li>
            <a href="https://github.com/VTramon" target="#blank">
              <GitHub />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/vitorr29" target="#blank">
              <Twitter />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/vitor-oliveira-543256163/"
              target="#blank"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footer__credit}>
          <a href="https://github.com/VTramon" target="#blank">
            Designed & Built by Vitor Ramon
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
