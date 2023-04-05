import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme['blue-500']};
  width: 54rem;
  height: 10.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32;

  h3 {
    font-family: 'Nunito' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme['white-blue-100']};
  }
`

export const LinksContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => props.theme['sky-blue']};
    text-transform: uppercase;

    svg + label{
      margin: 0.5rem;
    }

    label + svg {
      margin-left: 0.5rem;
    }
  }
`