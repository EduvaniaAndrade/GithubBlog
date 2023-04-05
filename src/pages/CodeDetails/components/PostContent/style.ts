import styled from "styled-components";

export const Container = styled.div`
  width: 54rem;
  height: 8.8rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  margin: auto;
  font-size: 1rem;
  border-radius: 2px;
  background-color: ${props => props.theme['blue-400']};
  color: ${props => props.theme['white-blue-200']};
`

