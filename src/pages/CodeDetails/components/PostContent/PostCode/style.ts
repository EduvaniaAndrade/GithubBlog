import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Fira Code' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`

export const Variable = styled.span`
  color: ${props => props.theme['blue-50']};
`

export const Value = styled.span`
  color: ${props => props.theme['green']};
`

export const Commentary = styled.span`
  margin-left: 4rem;
  color: ${props => props.theme['grey']};
`