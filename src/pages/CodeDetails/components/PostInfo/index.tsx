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
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'
import { GithubBlogContext } from '../../../../context/GithubBlogContext'

export function PostInfo() {
  const { issueDetails, user } = useContext(GithubBlogContext)

  function validated(date: any) {
    return !Number.isNaN(new Date(date).getTime())
  }

  let newDate
  const date = issueDetails.created_at
  if (validated(date)) {
    newDate = formatDistance(new Date(date), new Date(Date.now()), {
      addSuffix: true,
    })
  } else {
    console.log('not a valid date')
  }

  return (
    <Container>
      <LinksContent>
        <span>
          <CaretLeft />
          <Link to="/">Voltar</Link>
        </span>
        <Link to={issueDetails.html_url}>
          Github <ArrowSquareOut />
        </Link>
      </LinksContent>
      <h3>{issueDetails.title}</h3>
      <ContentLinks>
        <Links nome={user.name}>
          <FaGithub />
        </Links>
        <Links nome={newDate}>
          <Calendar />
        </Links>
        <Links nome="">
          <ChatCircleDots />
          {issueDetails.comments} Comentários
        </Links>
      </ContentLinks>
    </Container>
  )
}
