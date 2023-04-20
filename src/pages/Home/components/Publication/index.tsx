import { BodyText, Container, Content, ContentTitle } from './style'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { formatDistance } from 'date-fns'
import { GithubBlogContext } from '../../../../context/GithubBlogContext'

export function Publication() {
  const { issues, issuesDetails } = useContext(GithubBlogContext)

  return (
    <Container>
      {issues.map((issue) => {
        return (
          <Content key={issue.id} onClick={() => issuesDetails(issue.number)}>
            <ContentTitle>
              <h3>{issue.title}</h3>
              <span>
                {formatDistance(
                  new Date(issue.created_at),
                  new Date(Date.now()),
                  { addSuffix: true },
                )}
              </span>
            </ContentTitle>
            <BodyText>
              <ReactMarkdown>{issue.body}</ReactMarkdown>
            </BodyText>
          </Content>
        )
      })}
    </Container>
  )
}
