import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 3.5rem 0 4rem;
  cursor: pointer;
`

const HiddenTitle = styled.h1`
  display: none;
`

const Header = () => (
  <Link href="/">
    <HeaderWrapper>
      <HiddenTitle>Star Wars | Intermobile | Front-End Challenge</HiddenTitle>
      <Image
        src="/resources/assets/star-wars-logo.svg"
        alt="Star Wars | Intermobile | Front-End Challenge"
        width={144}
        height={54}
      />
    </HeaderWrapper>
  </Link>
)

export default Header
