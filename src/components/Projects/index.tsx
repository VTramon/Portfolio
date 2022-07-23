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
      text: 'An online Pokedex where you can check your favorite Pokemons anytime. This website was created using Next.js, TypeScript, SASS and Docker',
      site: 'https://pokedex-mu-ochre.vercel.app/',
      github: 'https://github.com/VTramon/Pokedex',
    },
    {
      image: '/projects/be_healthy.webp',
      alt: 'Be healthy site',
      name: 'Be healthy',
      text: 'An landing page about healthy food with simple design and easy understanding. This landing page was created using Next.js, TypeScript and SASS.',
      site: 'https://be-healthy-indol.vercel.app/',
      github: 'https://github.com/VTramon/Be-healthy',
    },
    {
      image: '/projects/rocket_nfts.webp',
      alt: 'Rocket NFTs site',
      name: 'Rocket NFTs',
      text: 'A landing page about NFT, this landing page was a challenge proposed by Rocket Seat in website. This landing page was created using HTML and CSS.',
      site: 'https://rocket-nft.vercel.app/',
      github: 'https://github.com/VTramon/Rocket-NFTs',
    },
    {
      image: '/projects/one_piece.webp',
      alt: 'One Piece site',
      name: 'One Piece',
      text: 'A landing page abou the main One Piece characters. This landing page was created using React.js, SASS, TypeScript and Docker',
      site: 'https://one-piece-theta.vercel.app/',
      github: 'https://github.com/VTramon/landing-page-One-Piece',
    },
    {
      image: '/projects/admin_template.webp',
      alt: 'Admin template site',
      name: 'Admin Template',
      text: 'A admin template with dark and light theme, and a beautiful login page. This template was created using Next.js, CSS, TypeScript and Firebase.',
      site: 'https://admin-template-ten.vercel.app/',
      github: 'https://github.com/VTramon/ADMIN-TEMPLATE',
    },
    {
      image: '/projects/book_finder.webp',
      alt: 'Book finder site',
      name: 'Book finder',
      text: 'A website tha make possible to find any book you want. This website was created using React.js, Styled-components and TypeScript',
      site: 'https://book-finder-sandy.vercel.app/',
      github: 'https://github.com/VTramon/Book-finder',
    },
  ]
  return (
    <section id="projects" className={styles.projects}>
      <h3>Projects</h3>

      {cardList.map((item, index) => {
        return (
          <ProjectCard
            isInverted={index % 2 === 0 ? 'notInverted' : 'inverted'}
            data={item}
          />
        )
      })}
    </section>
  )
}

export default Projects
