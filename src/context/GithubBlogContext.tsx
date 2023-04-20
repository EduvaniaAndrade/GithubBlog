import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { issuesProps, UserProps } from '../types/githubBlogTypes'

interface GithubBlogContextType {
  issues: issuesProps[]
  user: UserProps
  issuesLeght: number
  issuesDetails: (e: number) => void
  handleSearch: (e: any) => void
  query: string
  setQuery: (e: string) => void
  issueDetails: issuesProps
  setIssueDetails: (e: issuesProps) => void
}

type GithubBlockProps = {
  children: ReactNode
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

export function GithubBlogContextProvider({ children }: GithubBlockProps) {
  const [issues, setIssues] = useState<issuesProps[]>([])
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [issueDetails, setIssueDetails] = useState<issuesProps>(
    {} as issuesProps,
  )
  const [issuesLeght, setIssuesLeght] = useState(0)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const data = api
      .get('users/EduvaniaAndrade')
      .then((response) => {
        const userData: UserProps = response.data
        setUser(userData)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  useEffect(() => {
    const data = api
      .get('repos/EduvaniaAndrade/GithubBlog/issues')
      .then((response) => {
        const issuesData: issuesProps[] = response.data
        setIssues(issuesData)
        setIssuesLeght(issuesData.length)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  const issuesDetails = (numero: number) => {
    window.location.pathname = `/CodeDetails/${numero}`
  }

  const searchIssues = async (query: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:EduvaniaAndrade/GithubBlog/issues ${query}`,
      },
    })
    return response.data
  }

  const handleSearch = async (event: any) => {
    if (event.keyCode === 13) {
      const resultado = await searchIssues(query)
      setIssues(resultado.items)
    }
  }

  return (
    <GithubBlogContext.Provider
      value={{
        issues,
        user,
        issuesLeght,
        query,
        issueDetails,
        setIssueDetails,
        setQuery,
        issuesDetails,
        handleSearch,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
