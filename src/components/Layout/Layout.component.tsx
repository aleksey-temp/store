import React from 'react'

import { Sidebar } from 'components/Sidebar'
import { Wrapper, Main } from 'components/Layout/Layout.styled'

export const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>{children}</Main>
  </Wrapper>
)
