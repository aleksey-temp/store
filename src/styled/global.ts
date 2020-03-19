import { createGlobalStyle } from 'styled-components'

import { fontDefinitions } from 'styled/fonts'

export const GlobalStyles = createGlobalStyle`
  ${fontDefinitions};

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    font-weight: normal;

    box-sizing: border-box;
  }
`
