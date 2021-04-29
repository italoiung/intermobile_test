import Image from 'next/image'
import styled from 'styled-components'

import Info from '../Molecules/Info'

const FilmSection = styled.section`
  width: 1110px;
  max-width: calc(100% - 2rem);
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) =>
    theme.lg(`
    flex-wrap: nowrap;
  `)}
`

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
`

const InfoWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
`

const Film = (props) => (
  <FilmSection>
    <ImageWrapper>
      <Image
        src={`/resources/assets/${props.episode_id}.jpg`}
        alt={props.title}
        width={350}
        height={532}
      />
    </ImageWrapper>
    <InfoWrapper>
      <Info {...props} />
    </InfoWrapper>
  </FilmSection>
)

export default Film
