import styled from 'styled-components'

export const ProfileContainer = styled.nav`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px;
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;

  img {
    border-radius: 10px;
    width: 148px;
    height: 148px;
  }
`
export const ProfileInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const HeaderProfile = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    -webkit-box-align: center;
    align-items: center;
    color: ${(props) => props.theme['brand-blue']};
    transition: border 0.2s ease 0s;
    border-bottom: 2px solid transparent;
  }

  a:hover {
    cursor: pointer;
  }
`

export const FooterProfile = styled.footer`
  display: flex;
  height: 100%;
  align-items: flex-end;
  gap: 1.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
