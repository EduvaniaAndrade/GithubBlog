import { Container } from './style'
import logo from '../../assets/logo.svg'
import effect_left from '../../assets/effect_left.svg'
import effect_right from '../../assets/effect_right.svg'

export function Header() {
  return (
    <Container>
      <img src={effect_left} alt="" />
      <img src={logo} alt="" />
      <img src={effect_right} alt="" />
    </Container>
  )
}
