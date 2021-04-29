import { NextSeo } from 'next-seo'
import styled from 'styled-components'

import Film from '../components/Organisms/Film'

const Error = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const Episode = ({ film }) => (
  <main>
    {!film &&
      <Error>Episode not found!</Error>
    }
    {film &&
      <>
        <NextSeo title={film.title} />
        <Film {...film} />
      </>
    }
  </main>
)

Episode.getInitialProps = async ({ query }) => {
  if (!query.id)
    return {
      film: null
    }
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
