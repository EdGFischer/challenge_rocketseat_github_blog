import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HeaderProfile,
  ProfileContainer,
  ProfileInfo,
  FooterProfile,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

export function Profile() {
  interface UserInfoProps {
    name: string
    followers: number
    username: string
    company: string
    userUrl: string
    imgUrl: string
    description: string
  }

  const [userInfo, setUserInfo] = useState<UserInfoProps>()

  const fetchUsers = useCallback(async () => {
    const response = await api.get('/users/EdGFischer')
    const {
      name,
      followers,
      login,
      company,
      html_url: htmlUrl,
      avatar_url: avatarUrl,
      bio,
    } = response.data
    const newUserObj = {
      name,
      followers,
      username: login,
      company,
      userUrl: htmlUrl,
      imgUrl: avatarUrl,
      description: bio,
    }
    setUserInfo(newUserObj)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <ProfileContainer>
      <img src={userInfo?.imgUrl} alt="" />
      <ProfileInfo>
        <HeaderProfile>
          <strong>{userInfo?.name}</strong>
          <a href={userInfo?.userUrl} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>
        <p>{userInfo?.description}</p>
        <FooterProfile>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userInfo?.username}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {userInfo?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {userInfo?.followers}{' '}
            {userInfo?.followers === 1 ? 'seguidor' : 'seguidores'}
          </span>
        </FooterProfile>
      </ProfileInfo>
    </ProfileContainer>
  )
}
