import Link from 'next/link'
import styled from 'styled-components'

import Chapter from '../Atoms/Chapter'

// Inspired by https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
const intToRoman = (number) => {
  // Validate input
  if (isNaN(number)) return NaN
  // Define indexes so we can get a numeral until the hundreds. Indexes 0, 10 and 20 are empty to represent 0 numeral digit
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ]
  let digits = String(+number).split(''), // Split each digit to get the corresponding key index
    roman = '',
    i = 3 // Limit to the hundreds
  while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman // Get roman from digit times its decimal unity
  return Array(+digits.join('') + 1).join('M') + roman // Add the thousands
}

const CardWrapper = styled.article`
  position: relative;
  z-index: 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.15s all;
  a {
    font-size: 0.75rem;
    padding: 0.75rem 1.875rem;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-top: auto;
    margin-right: auto;
    transition: 0.15s all;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    a {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.blue};
    }
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const Title = styled.h3`
  max-width: 11.5rem;
  font-weight: bold;
  font-size: 1.75rem;
  margin: 0 0 1.25rem;
  small {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
    display: block;
    font-weight: 400;
  }
`

const Card = ({ title, number }) => (
  <CardWrapper>
    <Title>
      <small>Episode {intToRoman(number)}</small>
      {title}
    </Title>
    <Link href={`/episode-${number}`}>Movie Details</Link>
    <Chapter roman={intToRoman(number)} />
  </CardWrapper>
)

export default Card
