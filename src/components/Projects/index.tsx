/* eslint-disable array-callback-return */
import { useTranslation } from 'react-i18next'
import {
  CSS,
  Docker,
  ExternalLink,
  Firebase,
  GitHub,
  HTML,
  ReactJs,
  Redux,
  Sass,
  TypeScript,
} from '../Icons'
import styles from './style.module.scss'

type ProjectCardProps = {
  isInverted: 'inverted' | 'notInverted'
  data: {
    image: string
    alt: string
    name: string
    text: string
    site: string
    github: string
    stack: stackProps[]
  }
}

type stackProps =
  | 'react'
  | 'html'
  | 'css'
  | 'sass'
  | 'typescript'
  | 'docker'
  | 'redux'
  | 'firebase'

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const displayProperStack = (item: stackProps, index: number) => {
    switch (item) {
      case 'css':
        return (
          <li key={index}>
            <CSS />
          </li>
        )
      case 'docker':
        return (
          <li key={index}>
            <Docker />
          </li>
        )
      case 'html':
        return (
          <li key={index}>
            <HTML />
          </li>
        )
      case 'sass':
        return (
          <li key={index}>
            <Sass />
          </li>
        )
      case 'typescript':
        return (
          <li key={index}>
            <TypeScript />
          </li>
        )
      case 'react':
        return (
          <li key={index}>
            <ReactJs />
          </li>
        )
      case 'redux':
        return (
          <li key={index}>
            <Redux />
          </li>
        )
      case 'firebase':
        return (
          <li key={index}>
            <Firebase />
          </li>
        )
    }
  }
  return (
    <div className={`${styles.card} ${styles[props.isInverted]}`}>
      <div className={styles.card__details}>
        <h4>{props.data.name}</h4>
        <p>{props.data.text}</p>

        <ul className={styles.card__stack_icons}>
          {props.data.stack.map((item, index) => {
            return displayProperStack(item, index)
          })}
        </ul>

        <div className={styles.card__links}>
          <a href={props.data.site} rel="noreferrer" target="_blank">
            <GitHub />
          </a>

          <a href={props.data.github} rel="noreferrer" target="_blank">
            <ExternalLink />
          </a>
        </div>
      </div>

      <a href={props.data.site} rel="noreferrer" target="_blank">
        <picture>
          <source
            srcSet={`${props.data.image}_pc.webp`}
            media={'(min-width: 770px)'}
          />
          <source
            srcSet={`${props.data.image}_pc.png`}
            media={'(min-width: 770px)'}
          />

          <source
            srcSet={`${props.data.image}_mobile.webp`}
            media={'(max-width: 769px)'}
          />
          <source
            srcSet={`${props.data.image}_mobile.png`}
            media={'(max-width: 769px)'}
          />

          <img
            src={`${props.data.image}_pc.webp`}
            loading={'lazy'}
            alt={props.data.alt}
          />
          <img
            src={`${props.data.image}_pc.png`}
            loading={'lazy'}
            alt={props.data.alt}
          />

          <img
            src={`${props.data.image}_mobile.webp`}
            loading={'lazy'}
            alt={props.data.alt}
          />
          <img
            src={`${props.data.image}_mobile.png`}
            loading={'lazy'}
            alt={props.data.alt}
          />
        </picture>
      </a>
    </div>
  )
}

const Projects = () => {
  const { t } = useTranslation()

  const cardList: {
    image: string
    alt: string
    name: string
    text: string
    site: string
    github: string
    stack: stackProps[]
  }[] = [
    {
      image: '/projects/pokedex',
      alt: 'Pokedex site',
      name: 'Pokedex',
      text: t('project_pokedex'),
      site: 'https://pokedex-mu-ochre.vercel.app/',
      github: 'https://github.com/VTramon/Pokedex',
      stack: ['react', 'typescript', 'sass', 'docker', 'redux'],
    },
    {
      image: '/projects/be_healthy',
      alt: 'Be healthy site',
      name: 'Be healthy',
      text: t('project_be_healthy'),
      site: 'https://be-healthy-indol.vercel.app/',
      github: 'https://github.com/VTramon/Be-healthy',
      stack: ['react', 'typescript', 'sass'],
    },
    {
      image: '/projects/rocket_nfts',
      alt: 'Rocket NFTs site',
      name: 'Rocket NFTs',
      text: t('project_rocket_nfts'),
      site: 'https://rocket-nft.vercel.app/',
      github: 'https://github.com/VTramon/Rocket-NFTs',
      stack: ['html', 'css'],
    },
    {
      image: '/projects/admin_template',
      alt: 'Admin template site',
      name: 'Admin Template',
      text: t('project_admin_template'),
      site: 'https://admin-template-ten.vercel.app/',
      github: 'https://github.com/VTramon/ADMIN-TEMPLATE',
      stack: ['react', 'typescript', 'css', 'firebase'],
    },
  ]
  return (
    <section id="projects" className={styles.projects}>
      <h3>{t('projects_title')}</h3>

      {cardList.map((item, index) => {
        return (
          <ProjectCard
            key={index}
            isInverted={index % 2 === 0 ? 'notInverted' : 'inverted'}
            data={item}
          />
        )
      })}
    </section>
  )
}

export default Projects
