import { Container } from './style'
import { useContext } from 'react'
import { GithubBlogContext } from '../../../../context/GithubBlogContext'

export function Search() {
  const { handleSearch, setQuery, query } = useContext(GithubBlogContext)

  function changeValue(event: any) {
    setQuery(event.target.value)
  }

  return (
    <Container onKeyDown={handleSearch}>
      <input
        placeholder="Buscar"
        type="text"
        value={query}
        onChange={changeValue}
      />
    </Container>
  )
}
