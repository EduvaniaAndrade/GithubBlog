import styled from "styled-components";

export const Container = styled.section`
  margin: auto;
  margin-top: 12rem;
  width: 54rem;
  height: 6rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-family: 'Nunito' sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${props => props.theme['white-blue-200']};
    }

    span {
      font-family: 'Nunito' sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${props => props.theme['blue-100']};
    }
`