import { useContextSelector } from 'use-context-selector'
import {
  Issues,
  IssuesContext,
  IssuesContextType,
} from '../../../../contexts/IssuesContext'
import { BlogCardContainer, CardHeader } from './style'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatText } from '../../../../utils/formatText'
import { Link } from 'react-router-dom'

export function BlogCard() {
  const issues = useContextSelector<IssuesContextType, Issues[]>(
    IssuesContext,
    (context) => {
      return context.issues
    },
  )
  return (
    <BlogCardContainer>
      {issues.map((issue) => {
        return (
          <Link to={`/postPage/${issue.number}`} key={issue.id}>
            <CardHeader>
              <strong>{issue.title}</strong>
              <span>{issue.created_at}</span>
            </CardHeader>
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {formatText(issue.body, 20)}
              </ReactMarkdown>
            </div>
          </Link>
        )
      })}
    </BlogCardContainer>
  )
}
