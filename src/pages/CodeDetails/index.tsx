import { useParams } from 'react-router-dom'
import { PostInfo } from './components/PostInfo/index'
import { ContentText } from './style'
import { useEffect, useContext } from 'react'
import { api } from '../../lib/axios'
import { issuesProps } from '../../types/githubBlogTypes'
import { GithubBlogContext } from '../../context/GithubBlogContext'
import ReactMarkdown from 'react-markdown'

export function CodeDetails() {
  const { issueDetails, setIssueDetails } = useContext(GithubBlogContext)

  const { number } = useParams()

  useEffect(() => {
    const data = api
      .get(`repos/EduvaniaAndrade/GithubBlog/issues/${number}`)
      .then((response) => {
        const issueDetailsData: issuesProps = response.data
        setIssueDetails(issueDetailsData)
      })
  }, [])


  return (
    <>
      <PostInfo />
      <ContentText>
        <div>
          <ReactMarkdown>{issueDetails.body}</ReactMarkdown>
        </div>
      </ContentText>
    </>
  )
}
