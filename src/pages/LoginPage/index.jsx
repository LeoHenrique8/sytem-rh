import React from 'react'
import { Container, Imagem, LoginBox, Form, Input, Logo, LoginButton } from './style'
import ImgReuniao from  "../../Images/reuniao.png"
import RHLogo from  "../../Images/logo.png"

function LoginPage() {
  return (
    <Container>
     <Imagem src={ImgReuniao}/>
     <LoginBox>
     <Logo src={RHLogo}/>
      <Form>
        <Input placeholder='Usuário'/>
        <Input placeholder='Senha'/>
        <LoginButton>Entrar</LoginButton>
      </Form>
     </LoginBox>
    </Container>
  )
}

export default LoginPage
