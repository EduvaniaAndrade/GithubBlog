import { PostCode } from './PostCode'
import { Container } from './style'

export function PostContent() {
  return (
    <Container>
      <PostCode
        variavelType="let"
        value="42"
        commentaries="// foo is now a number"
        variavel="foo = "
      />
      <PostCode
        variavel="foo = "
        value="‘bar’"
        commentaries="// foo is now a string"
      ></PostCode>
      <PostCode
        variavel="foo = "
        value="true"
        commentaries="// foo is now a boolean"
      />
    </Container>
  )
}
