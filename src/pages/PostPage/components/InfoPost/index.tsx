import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoPostContainer, InfoPostFooter, InfoPostHeader } from './styles'

import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { PostContext } from '../../../../contexts/PostContext'

export function InfoPost() {
  const { postNumber } = useParams()
  const { fetchPostDetails, postDetails } = useContext(PostContext)

  useEffect(() => {
    fetchPostDetails(Number(postNumber)).catch((error) => {
      console.error('Erro ao buscar detalhes do post:', error)
    })
  }, [])

  return (
    <InfoPostContainer>
      <InfoPostHeader>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </a>
        <a href={postDetails?.html_url} target="_blank" rel="noreferrer">
          Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </InfoPostHeader>
      <h2>{postDetails?.title}</h2>
      <InfoPostFooter>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {postDetails?.user?.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{postDetails?.created_at}</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {postDetails?.comments} Comentários
        </span>
      </InfoPostFooter>
    </InfoPostContainer>
  )
}
