import { useTranslation } from 'react-i18next'
import { ExternalLink, GitHub } from '../Icons'
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
  }
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className={`${styles.card} ${styles[props.isInverted]}`}>
      <div className={styles.card__details}>
        <h4>{props.data.name}</h4>
        <p>{props.data.text}</p>

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
        <img src={props.data.image} loading="lazy" alt={props.data.alt} />
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
  }[] = [
    {
      image: '/projects/pokedex.webp',
      alt: 'Pokedex site',
      name: 'Pokedex',
      text: t('project_pokedex'),
      site: 'https://pokedex-mu-ochre.vercel.app/',
      github: 'https://github.com/VTramon/Pokedex',
    },
    {
      image: '/projects/be_healthy.webp',
      alt: 'Be healthy site',
      name: 'Be healthy',
      text: t('project_be_healthy'),
      site: 'https://be-healthy-indol.vercel.app/',
      github: 'https://github.com/VTramon/Be-healthy',
    },
    {
      image: '/projects/rocket_nfts.webp',
      alt: 'Rocket NFTs site',
      name: 'Rocket NFTs',
      text: t('project_rocket_nfts'),
      site: 'https://rocket-nft.vercel.app/',
      github: 'https://github.com/VTramon/Rocket-NFTs',
    },
    {
      image: '/projects/one_piece.webp',
      alt: 'One Piece site',
      name: 'One Piece',
      text: t('project_one_piece'),
      site: 'https://one-piece-theta.vercel.app/',
      github: 'https://github.com/VTramon/landing-page-One-Piece',
    },
    {
      image: '/projects/admin_template.webp',
      alt: 'Admin template site',
      name: 'Admin Template',
      text: t('project_admin_template'),
      site: 'https://admin-template-ten.vercel.app/',
      github: 'https://github.com/VTramon/ADMIN-TEMPLATE',
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
