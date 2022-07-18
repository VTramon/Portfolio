import styles from './style.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
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
