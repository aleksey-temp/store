import { css } from 'styled-components'

export const fontDefinitions = css`
  @font-face {
    font-family: 'Inter';
    font-weight: normal;
    font-style: normal;
    src: url('/assets/fonts/Inter-Regular.eot');
    src: local('Inter Regular'), local('Inter-Regular'),
      url('/assets/fonts/Inter-Regular.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/Inter-Regular.woff2') format('woff2'),
      url('/assets/fonts/Inter-Regular.woff') format('woff'),
      url('/assets/fonts/Inter-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 300;
    font-style: normal;
    src: url('/assets/fonts/Inter-Light.eot');
    src: local('Inter Light'), local('Inter-Light'),
      url('/assets/fonts/Inter-Light.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/Inter-Light.woff2') format('woff2'),
      url('/assets/fonts/Inter-Light.woff') format('woff'),
      url('/assets/fonts/Inter-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: bold;
    font-style: normal;
    src: url('/assets/fonts/Inter-Bold.eot');
    src: local('Inter Bold'), local('Inter-Bold'),
      url('/assets/fonts/Inter-Bold.eot?#iefix') format('embedded-opentype'),
      url('/assets/fonts/Inter-Bold.woff2') format('woff2'),
      url('/assets/fonts/Inter-Bold.woff') format('woff'),
      url('/assets/fonts/Inter-Bold.ttf') format('truetype');
  }
`