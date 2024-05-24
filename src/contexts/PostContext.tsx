import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface User {
  login: string
}

interface PostDetails {
  id: number
  title: string
  body: string
  html_url: string
  comments: number
  state: string
  created_at: string
  updated_at: string
  user: User
}

interface PostContextType {
  postDetails: PostDetails | null
  fetchPostDetails: (number: number) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null)

  async function fetchPostDetails(number: number) {
    try {
      const response = await api.get(
        `/repos/EdGFischer/challenge_rocketseat_github_blog/issues/${number}`,
      )

      const formattedPostDetails = {
        ...response.data,
        created_at: formatDistanceToNow(new Date(response.data.created_at), {
          locale: ptBR,
          addSuffix: true,
        }),
      }

      setPostDetails(formattedPostDetails)
    } catch (error) {
      console.error('Error fetching post details:', error)
    }
  }

  return (
    <PostContext.Provider value={{ postDetails, fetchPostDetails }}>
      {children}
    </PostContext.Provider>
  )
}
