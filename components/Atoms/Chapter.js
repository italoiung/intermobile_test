import styled from 'styled-components'

const Numeral = styled.span`
  width: 12.125rem;
  color: ${({ theme }) => theme.colors.darkGray};
  text-shadow: -1px 0 ${({ theme }) => theme.colors.white},
    0 1px ${({ theme }) => theme.colors.white},
    1px 0 ${({ theme }) => theme.colors.white},
    0 -1px ${({ theme }) => theme.colors.white};
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -2rem;
  font-size: 12.55rem;
  opacity: 0.2;
  z-index: -1;
`

const Chapter = ({ roman }) => <Numeral>{roman}</Numeral>

export default Chapter
