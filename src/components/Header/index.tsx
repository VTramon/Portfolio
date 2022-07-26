import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'

const Header = () => {
  const [position, setPosition] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState<'visible' | 'hidden'>('visible')

  const hideHeaderOnClick = () => {
    setTimeout(() => {
      setIsVisible('hidden')
    }, 1000)
  }
  const handleScroll = () => {
    const moving = window.scrollY

    if (moving > position) {
      setIsVisible('hidden')
      setPosition(moving)
    } else {
      setIsVisible('visible')
      setPosition(moving)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY])

  const { t } = useTranslation()

  const backgroundColor = position <= 230 ? 'transparent' : '#1d1d1db5'

  return (
    <header
      style={{ backgroundColor: backgroundColor, transition: 'ease 0.5s' }}
      className={`${styles.header} ${styles[isVisible]}`}
    >
      <nav className={styles.header__nav}>
        <li>
          <button>
            <a href="#home">{t('header_home_link')}</a>
          </button>
        </li>

        <li>
          <button onClick={() => hideHeaderOnClick()}>
            <a href="#about">{t('header_about_link')}</a>
          </button>
        </li>

        <li>
          <button onClick={() => hideHeaderOnClick()}>
            <a href="#projects">{t('header_projects_link')}</a>
          </button>
        </li>

        <li>
          <button onClick={() => hideHeaderOnClick()}>
            <a href="#GetInTouch">{t('header_contact_link')}</a>
          </button>
        </li>
      </nav>
    </header>
  )
}

export default Header
