import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  gap: 8px;
  background-color: ${props => props.theme['blue-700']};
  border: 1px solid ${props => props.theme['blue-300']};
  border-radius: 6px;
  margin-top: 0.5rem;

  input {
    width: 52rem;
    height: 1.6rem;
    font-family: 'Nunito' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    background-color: inherit;
    border: 0;
    color: ${props => props.theme['blue-200']};
  }
`