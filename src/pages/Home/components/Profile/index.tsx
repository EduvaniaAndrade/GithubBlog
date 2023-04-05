import { Container, Content, ContentLinks, UserNameContent } from './style'
import userPhoto from '../../../../assets/avatar.svg'
import { ArrowSquareOut } from 'phosphor-react'
import { Links } from '../../../../components/Links'
import { FaGithub, FaUsers, FaBuilding } from 'react-icons/fa'

export function Profile() {
  return (
    <Container>
      <img src={userPhoto} alt="User Foto" />
      <Content>
        <UserNameContent>
          <h1>Ada Andrade</h1>
          <a>
            Github <ArrowSquareOut />
          </a>
        </UserNameContent>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ContentLinks>
          <Links nome="Ada Andrade">
            <FaGithub />
          </Links>
          <Links nome="Rocketseat">
            <FaBuilding />
          </Links>
          <Links nome="32 Seguidores">
            <FaUsers />
          </Links>
        </ContentLinks>
      </Content>
    </Container>
  )
}
