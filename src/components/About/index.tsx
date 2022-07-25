import { useTranslation } from 'react-i18next'
import ColorTransitionComponent from '../ColorTransitionComponent'
import styles from './style.module.scss'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.about}>
      <ColorTransitionComponent />

      <h3>{t('about_title')}</h3>

      <div className={styles.about__introduction}>
        <p>{t('about_introduction_1')}</p>

        <br />

        <p>{t('about_introduction_2')}</p>
      </div>

      <ul className={styles.about__logo_list}>
        <li>
          <img loading="lazy" src="/languages/html.webp" alt="html logo" />
        </li>

        <li>
          <img loading="lazy" src="/languages/css.webp" alt="css logo" />
        </li>

        <li>
          <img
            loading="lazy"
            src="/languages/typescript.webp"
            alt="typescript logo"
          />
        </li>

        <li>
          <img loading="lazy" src="/languages/react.webp" alt="react logo" />
        </li>

        <li>
          <img loading="lazy" src="/languages/dart.webp" alt="dart logo" />
        </li>

        <li>
          <img
            loading="lazy"
            src="/languages/flutter.webp"
            alt="flutter logo"
          />
        </li>
      </ul>
    </section>
  )
}

export default About
