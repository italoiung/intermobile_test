import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin: 0 -3.125rem;
  max-width: calc(100% + 3.125rem * 2);
  padding: 2.5rem 0;
`

const SmallText = styled.small`
  margin: 0 3.125rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.lightGray};
`

const Footer = () => (
  <FooterWrapper>
    <SmallText>TM & © Lucasfilm Ltd. All Rights Reserved</SmallText>
    <SmallText>
      <a href="https://www.starwars.com/" rel="nofollow">
        Star Wars Official Website
      </a>
    </SmallText>
  </FooterWrapper>
)

export default Footer
