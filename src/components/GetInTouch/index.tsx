import emailjs from '@emailjs/browser'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'

const GetInTouch = () => {
  const { t } = useTranslation()

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        event.currentTarget,
        process.env.REACT_APP_PUBLIC_KEY!
      )
      .then(
        (result) => {
          window.alert('Email enviado com sucesso.')
          event.currentTarget.reset()
        },
        (error) => {
          window.alert('Houve algo de errado, por favor tente novamente.')
          console.log(error.text)
        }
      )
      .catch((error) => {
        window.alert('Houve algo de errado, por favor tente novamente.')
        console.log(error)
      })
  }

  return (
    <section id="GetInTouch" className={styles.GetInTouch}>
      <div className={styles.GetInTouch__container}>
        <h3>{t('contact_title')}</h3>

        <p>{t('contact_text')}</p>

        <form
          onSubmit={sendEmail}
          name="emailForm"
          className={styles.GetInTouch__form}
        >
          <input type="text" placeholder="Name" name="name" required />

          <input placeholder="Email" name="email" type="email" required />

          <textarea
            placeholder="Message"
            name="message"
            id="mailContent"
            required
          />

          <div className={styles.GetInTouch__container_button}>
            <div className={styles.GetInTouch__background_button} />
            <button type="submit">{t('contact_button')}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default GetInTouch
