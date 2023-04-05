import { Profile } from './components/Profile'
import { Publication } from './components/Publication'
import { Search } from './components/Search'
import { Container, Content } from './style'

export function Home() {
  return (
    <Container>
      <Profile />
      <Content>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Content>
      <Search />
      <Publication />
    </Container>
  )
}
