import { useContextSelector } from 'use-context-selector'
import {
  Issues,
  IssuesContext,
  IssuesContextType,
} from '../../../../contexts/IssuesContext'
import { SearFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const issues = useContextSelector<IssuesContextType, Issues[]>(
    IssuesContext,
    (context) => {
      return context.issues
    },
  )

  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const query = watch('query')

  useEffect(() => {
    if (query !== undefined) {
      fetchIssues(query)
    }
  }, [query, fetchIssues])

  return (
    <SearFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </div>
      <input placeholder="Buscar conteúdo" {...register('query')} />
    </SearFormContainer>
  )
}
