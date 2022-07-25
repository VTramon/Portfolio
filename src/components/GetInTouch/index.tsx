import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'

const GetInTouch = () => {
  const { t } = useTranslation()

  return (
    <section id="GetInTouch" className={styles.GetInTouch}>
      <div className={styles.GetInTouch__container}>
        <h3>{t('contact_title')}</h3>

        <p>{t('contact_text')}</p>

        <div className={styles.GetInTouch__container_button}>
          <div className={styles.GetInTouch__background_button} />
          <button>
            <a href="mailto:vitorr.ooliveira@gmail.com">
              {t('contact_button')}
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
