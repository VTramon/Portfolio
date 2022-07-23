import { useEffect, useState } from 'react'
import styles from './style.module.scss'

// type HeaderProps = {
//   isVisible: 'visible' | 'hidden'
// }

const Header = () => {
  const [position, setPosition] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState<'visible' | 'hidden'>('visible')

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
    // handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY])

  const backgroundColor = position <= 230 ? 'transparent' : '#1d1d1db5'

  return (
    <header
      style={{ backgroundColor: backgroundColor, transition: 'ease 0.5s' }}
      className={`${styles.header} ${styles[isVisible]}`}
    >
      <nav className={styles.header__nav}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#GetInTouch">Contact</a>
        </li>
      </nav>
    </header>
  )
}

export default Header
