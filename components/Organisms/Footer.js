import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  text-align: center;
  ${({ theme }) =>
  theme.lg(`
    margin: 0 -3.125rem;
    max-width: calc(100% + 3.125rem * 2);
    display: flex;
    justify-content: center;
  `)}
`

const SmallText = styled.small`
  display: block;
  margin: 0.5rem 3.125rem;
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
