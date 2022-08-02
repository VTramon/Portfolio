import { useTranslation } from 'react-i18next'
import ColorTransitionComponent from '../ColorTransitionComponent'
import {
  CSS,
  Dart,
  Flutter,
  HTML,
  ReactJs,
  Redux,
  Sass,
  TypeScript,
} from '../Icons'
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
        <h4>Stack</h4>

        <li>
          <HTML />
          <span>HTML</span>
        </li>

        <li>
          <CSS />
          <span>CSS</span>
        </li>

        <li>
          <Sass />
          <span>Sass</span>
        </li>

        <li>
          <TypeScript />
          <span>TypeScript</span>
        </li>

        <li>
          <ReactJs />
          <span>React.js</span>
        </li>

        <li>
          <Dart />
          <span>Dart</span>
        </li>

        <li>
          <Flutter />
          <span>Flutter</span>
        </li>

        <li>
          <Redux />
          <span>Redux</span>
        </li>
      </ul>
    </section>
  )
}

export default About
