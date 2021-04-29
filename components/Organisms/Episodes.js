import styled from 'styled-components'

import Card from '../Molecules/Card'

const EpisodesSection = styled.section`
  width: 1110px;
  max-width: calc(100% - 2rem);
  margin: auto;
`

const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(100% + 0.625rem * 2);
  margin: 0 -0.625rem;
`

const FlexCard = styled.div`
  padding: 0.75rem 0.625rem;
  flex: 1 1 calc(100% / 3);
  min-width: 22rem;
`

const Episodes = ({ episodes }) => (
  <EpisodesSection>
    <EpisodesWrapper>
      {episodes.map(({ title, episode_id }) => (
        <FlexCard key={episode_id}>
          <Card title={title} number={episode_id} />
        </FlexCard>
      ))}
    </EpisodesWrapper>
  </EpisodesSection>
)

export default Episodes
