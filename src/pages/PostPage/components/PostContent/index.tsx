import { useContext } from 'react'
import { PostContatentContainer } from './styles'
import { PostContext } from '../../../../contexts/PostContext'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

export function PostContent() {
  const { postDetails } = useContext(PostContext)

  return (
    <PostContatentContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {postDetails?.body}
      </ReactMarkdown>
    </PostContatentContainer>
  )
}
