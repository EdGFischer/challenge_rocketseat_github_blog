import styled from 'styled-components'

export const SearFormContainer = styled.section`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    strong {
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-style: normal;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    margin-top: 0.75rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    width: 100%;
    color: ${(props) => props.theme['base-label']};
  }

  input::-webkit-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
