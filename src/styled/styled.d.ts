import 'styled-components'

import { colors } from 'styled/theme/colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colors
  }
}
