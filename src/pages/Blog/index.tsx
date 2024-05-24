import { BlogCard } from './components/BlogCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './style'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm />
      <BlogCard />
    </BlogContainer>
  )
}
