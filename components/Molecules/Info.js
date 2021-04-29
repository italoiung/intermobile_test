import styled from 'styled-components'

// Inspired by https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
const intToRoman = (number) => {
  // Validate input
  if (isNaN(number)) return NaN
  // Define indexes which index 0, 10 and 20 are empty so we can get the hundreds
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

const Title = styled.h2`
  font-weight: bold;
  font-size: 3rem;
  margin: 0 0 1.25rem;
  small {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 400;
  }
`

const Meta = styled.h3`
  color: ${({ theme }) => theme.colors.lightGray};
  display: inline-block;
  max-width: 10.625rem;
  margin: 0 1.25rem 1.75rem 0;
  font-size: 1rem;
  vertical-align: top;
  strong {
    display: block;
    color: ${({ theme }) => theme.colors.white};
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.25rem;
`

const Info = ({
  title,
  episode_id: number,
  director,
  producer,
  release_date: date,
  opening_crawl: description,
}) => (
  <article>
    <header>
      <Title>
        <small>Episode {intToRoman(number)}</small>
        {title}
      </Title>
      <Meta>
        Director:
        <strong>{director}</strong>
      </Meta>
      <Meta>
        Producer:
        <strong>{producer}</strong>
      </Meta>
      <Meta>
        Release Date:
        <strong>{date}</strong>
      </Meta>
    </header>
    <Description>&quot;{description}&quot;</Description>
  </article>
)

export default Info
