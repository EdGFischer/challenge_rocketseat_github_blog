import { PostProvider } from '../../contexts/PostContext'
import { InfoPost } from './components/InfoPost'
import { PostContent } from './components/PostContent'
import { PostPageContainer } from './styles'

export function PostPage() {
  return (
    <PostProvider>
      <PostPageContainer>
        <InfoPost />
        <PostContent />
      </PostPageContainer>
    </PostProvider>
  )
}
