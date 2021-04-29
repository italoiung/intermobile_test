import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from '../components/Organisms/Footer'
import Header from '../components/Organisms/Header'

const themeBreakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = {
  colors: {
    blue: '#0112fe',
    black: '#08080A',
    darkGray: '#16171D',
    lightGray: '#B0AFAF',
    white: '#FFFFFF',
  },
}

Object.entries(themeBreakpoints).forEach(([breakpoint, value]) => {
  theme[breakpoint] = (content) => `
    @media (min-width: ${value}px) {
      ${content}
    }
  `
})

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  svg {
    max-width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    box-sizing: border-box;
    font: normal 100% / 1.5 'Montserrat', sans-serif;
  }
  body {
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    overflow-x: hidden;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <DefaultSeo
      titleTemplate="%s | Intermobile | Front-End Challenge"
      description="Technical test for Intermobile's front-end job opportunity using next.js and consuming https://swapi.dev/api/films/ films API"
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://imfec.viung.me/',
        site_name: 'Intermobile | Front-End Challenge',
        images: [{ url: 'https://imfec.viung.me/resources/design/home.png' }],
      }}
    />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
)

export default App
