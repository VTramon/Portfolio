import styles from './style.module.scss'

const GetInTouch = () => {
  return (
    <section id="GetInTouch" className={styles.GetInTouch}>
      <div className={styles.GetInTouch__container}>
        <h3>Get In Touch</h3>

        <p>
          If you are interested in my services you can contact me clicking in
          the button bellow.
        </p>

        <div className={styles.GetInTouch__container_button}>
          <div className={styles.GetInTouch__background_button} />
          <button type="button">Say Hello</button>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
