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
  text-align: justify;

  strong {
    font-weight: 700;
    display: block;
    text-decoration: underline;
    color: ${props => props.theme['sky-blue']};
    margin: 1rem 0;
  }

  em {
    color: ${props => props.theme['grey']};
  }

  code {
    color: ${props => props.theme['blue-50']};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme['green']};
  }

  ul {
    width: 54rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    font-size: 1rem;
    border-radius: 2px;
    background-color: ${props => props.theme['blue-400']};
    color: ${props => props.theme['white-blue-200']};
    list-style: none;
    position: relative;
    right: 1rem;
    margin-top: 2rem;
  }

  ol {
    list-style: none;
    margin: 1rem;
  }
`
