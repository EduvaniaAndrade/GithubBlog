import { Commentary, Container, Value, Variable } from './style'
import { ReactNode } from 'react'

interface PostCodeProps {
  variavelType?: string
  value?: string
  commentaries?: string
  variavel?: ReactNode
}

export function PostCode({
  variavelType,
  value,
  commentaries,
  variavel,
}: PostCodeProps) {
  return (
    <Container>
      <Variable> {variavelType}</Variable>
      <span> {variavel}</span>
      <Value>{value}</Value>;<Commentary>{commentaries}</Commentary>
    </Container>
  )
}
