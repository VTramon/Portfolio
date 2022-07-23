import ColorTransitionComponent from '../ColorTransitionComponent'
import styles from './style.module.scss'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <ColorTransitionComponent />

      <h3>Hi there!</h3>

      <div className={styles.about__introduction}>
        <p>
          I'm Vitor, I live in Rio and I'm currently studying computer science
          at Veiga de Almeida. My projects include landing pages, templates and
          websites. If you're interested in the tools and software I use check
          out my uses page.
        </p>

        <br />

        <p>
          In my spare time I like to watch movies, play video games, and
          practice coding. I'm always down for hearing about new projects, so
          feel free to drop me a line.
        </p>
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
