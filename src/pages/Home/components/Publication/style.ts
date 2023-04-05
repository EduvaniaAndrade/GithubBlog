import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
  gap: 2rem;
`

export const Content = styled.div`
  width: 26rem;
  height: 16.25rem;
  background-color: ${props => props.theme['blue-400']}; 
  border-radius: 10px;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h3 {
      width: 250px;
      font-family: 'Nunito' sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 100%;
      color: ${props => props.theme['white-blue-100']};
    }

    span {
      font-family: 'Nunito' sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.87rem;
      line-height: 160%;
      color: ${props => props.theme['blue-100']};
    }
  }

  p {
    width: 22rem;
    height: 7rem;
    font-family: 'Nunito' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
    color: ${props => props.theme['white-blue-300']};
    overflow: hidden;
    text-align: justify;
    position: relative;
    margin-right: -1rem;
    padding-right: 1rem;

    &::before {
      content: '...';
      position: absolute;
      right: 0;
      bottom: -4px;
      color: #AFC2D4;
    }
  }
`