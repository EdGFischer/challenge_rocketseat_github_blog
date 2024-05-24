import { ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface Issues {
  id: number
  title: string
  html_url: string
  state: string
  number: number
  created_at: string
  updated_at: string
  body: string
}

export interface IssuesContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  async function fetchIssues(query = '') {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query} repo:EdGFischer/challenge_rocketseat_github_blog`,
        },
      })
      const formattedIssues = response.data.items.map((issue: Issues) => ({
        ...issue,
        created_at: formatDistanceToNow(new Date(issue.created_at), {
          locale: ptBR,
          addSuffix: true,
        }),
      }))

      setIssues(formattedIssues)
    } catch (error) {
      console.error('Error fetching issues:', error)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
