import { Container, Content, ContentLinks, UserNameContent } from './style'
import { ArrowSquareOut } from 'phosphor-react'
import { Links } from '../../../../components/Links'
import { FaGithub, FaUsers, FaBuilding } from 'react-icons/fa'
import { useContext } from 'react'
import { GithubBlogContext } from '../../../../context/GithubBlogContext'
import { Link } from 'react-router-dom'

export function Profile() {
  const { user } = useContext(GithubBlogContext)

  return (
    <Container>
      <img src={user?.avatar_url} alt="User Foto" />
      <Content>
        <UserNameContent>
          <h1>{user?.name}</h1>
          <Link to={user.html_url}>
            Github <ArrowSquareOut />
          </Link>
        </UserNameContent>
        <p>{user?.bio}</p>

        <ContentLinks>
          <Links nome={user?.login}>
            <FaGithub />
          </Links>
          <Links nome="Ada Andrade">
            <FaBuilding />
          </Links>
          <Links nome="_ Seguidores">
            <FaUsers />
          </Links>
        </ContentLinks>
      </Content>
    </Container>
  )
}
