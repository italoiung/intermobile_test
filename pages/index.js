import { NextSeo } from 'next-seo'
import styled from 'styled-components'

import Episodes from '../components/Organisms/Episodes'

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3.125rem;
  text-align: center;
  font-weight: 400;
`

const Home = ({ films }) => (
  <main>
    <NextSeo title="Home" />
    <Title>
      <b>CLASSIC MOVIES</b> COLLECTION
    </Title>
    <Episodes episodes={films} />
  </main>
)

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/films/')
  const films = await res.json()

  return {
    props: {
      films: films.results,
    },
  }
}

export default Home
