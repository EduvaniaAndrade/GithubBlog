import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme['blue-500']};
  width: 54rem;
  height: 13.25rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  p {
    font-family: 'Nunito' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${props => props.theme['white-blue-300']};
  }
`

export const Content = styled.div`
  width: 38.25rem;
  flex-direction: row;
`

export const UserNameContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-family: 'Nunito' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme['white-blue-100']};
  }

  a {
    text-transform: uppercase;
    color: ${props => props.theme['sky-blue']};
  }
`

export const ContentLinks = styled.div`
  color: ${props => props.theme['white-blue-300']};
  display: flex;
  gap: 16px;

  svg {
    margin-right: -1rem;
  }
`