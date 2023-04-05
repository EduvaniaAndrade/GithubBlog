import { FaGithub } from 'react-icons/fa'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircleDots,
} from 'phosphor-react'
import { Container, LinksContent } from './style'
import { ContentLinks } from '../../../Home/components/Profile/style'
import { Links } from '../../../../components/Links'

export function PostInfo() {
  return (
    <Container>
      <LinksContent>
        <span>
          <CaretLeft />
          <label>Voltar</label>
        </span>
        <span>
          <label>Ver no GitHub</label> <ArrowSquareOut />
        </span>
      </LinksContent>
      <h3>JavaScript data types and data structures</h3>
      <ContentLinks>
        <Links nome="Ada Andrade">
          <FaGithub />
        </Links>
        <Links nome="Há 1 dia">
          <Calendar />
        </Links>
        <Links nome="5 Comentários">
          <ChatCircleDots />
        </Links>
      </ContentLinks>
    </Container>
  )
}
