import { Profile } from './components/Profile'
import { Publication } from './components/Publication'
import { Search } from './components/Search'
import { Container, Content } from './style'
import { useContext } from 'react'
import { GithubBlogContext } from '../../context/GithubBlogContext'

export function Home() {
  const { issuesLeght } = useContext(GithubBlogContext)

  return (
    <Container>
      <Profile />
      <Content>
        <h3>Publicações</h3>
        <span>{issuesLeght} publicações</span>
      </Content>
      <Search />
      <Publication />
    </Container>
  )
}
