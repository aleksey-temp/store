import styled from 'styled-components'

export const Aside = styled.aside`
  width: 32rem;

  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.primary}
  );
`
