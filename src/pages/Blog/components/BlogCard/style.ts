import styled from 'styled-components'

export const BlogCardContainer = styled.main`
  max-width: 864px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  a {
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    border: 2px solid transparent;
    height: 260px;
    overflow: hidden;
    transition: border 0.2s ease 0s;
    cursor: pointer;
    div {
      flex: 1;
      margin-top: 0.25rem;
      color: ${(props) => props.theme['base-text']};
      overflow: hidden;
      text-overflow: ellipsis;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
      }
    }
  }
`

export const CardHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 1rem;

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.2rem;
  }
  span {
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
