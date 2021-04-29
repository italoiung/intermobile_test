import { NextSeo } from 'next-seo'

import Film from '../components/Organisms/Film'

const Episode = ({ film }) => (
  <main>
    <NextSeo title={film.title} />
    <Film {...film} />
  </main>
)

Episode.getInitialProps = async ({ query }) => {
  const episodeId = query.id.split('-')[1]
  // API doesn't work properly to fetch single episode by id
  // const res = await fetch(`https://swapi.dev/api/films/${episodeId}`)
  const res = await fetch(`https://swapi.dev/api/films`)
  const films = await res.json()
  return {
    film: films.results.find((film) => film.episode_id === +episodeId),
  }
}

export default Episode
