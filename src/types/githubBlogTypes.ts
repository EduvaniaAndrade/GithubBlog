export interface UserProps {
  avatar_url: string
  name: string
  login: string
  bio: string
  html_url: string
}


export interface issuesProps {
  repo: string
  title: string
  body: string
  html_url: string
  comments: number
  created_at: string
  id: string
  number: number
  code: string

  user: UserProps
}