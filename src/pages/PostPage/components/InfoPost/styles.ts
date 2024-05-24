import styled from 'styled-components'

export const InfoPostContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    margin-top: 1.4rem;
    color: ${(props) => props.theme['base-title']};
  }
`
export const InfoPostHeader = styled.header`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: ${(props) => props.theme['brand-blue']};
  }
`

export const InfoPostFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  }
`
