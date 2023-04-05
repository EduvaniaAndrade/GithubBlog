import styled from "styled-components";

export const Container = styled.div``


export const ContentText = styled.div`
  width: 52rem;
  margin: 8rem auto 2rem;
  font-family: 'Nunito' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${props => props.theme['white-blue-300']};

  strong {
    font-weight: 700;
  }

  span {
    display: block;
    text-decoration: underline;
    color: ${props => props.theme['sky-blue']};
    margin-top: 1rem;
  }
`
