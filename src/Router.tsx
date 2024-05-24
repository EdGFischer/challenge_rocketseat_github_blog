import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/postPage/:postNumber" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
