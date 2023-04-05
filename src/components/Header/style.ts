import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme['blue-500']};
  width: 100%;
  max-width: 1370px;
  height: 296px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`