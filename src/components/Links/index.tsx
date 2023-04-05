import { Container } from './style'
import { ReactNode } from 'react'

interface LinksProps {
  nome: string
  children: ReactNode
}

export function Links({ nome, children }: LinksProps) {
  return (
    <Container>
      {children}
      <span>{nome}</span>
    </Container>
  )
}
