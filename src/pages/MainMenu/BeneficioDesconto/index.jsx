import React, {useState} from 'react'
import SideBar from '../SideBar'
import { Container, Form, Name, FormTitle, Label, Bd, Valor, SubmitButton, Card, CardButton,CardContent, CardTitle } from './style'


function BeneficioDesconto() {
const [name, setName] = useState('');
const [valor, setValor] = useState('');
const [bd, setBd] = useState('');
const [colorbd, setColorbd] = useState(true);

function onlyNumbersOnValue(event){
 const numericValue = event.replace(/[^0-9,.]/g, '');
  setValor(numericValue);
}
function validaBd(event){
  setBd(event);
  if(event === "beneficio"){
    setColorbd(true);
  }
  if(event === "desconto"){
    setColorbd(false);
  }
  return '';
}

  return (
    <Container>
      <SideBar/>
      <Form>
        <FormTitle>Cadastrar um benefício ou desconto</FormTitle>
        <Label>Descrição</Label>
        <Name type='text' placeholder='Descrição' value={name} onChange={(event) => setName(event.target.value)}/>
        <Label>Selecione: </Label>
        <Bd value={bd} onChange={(event) => validaBd(event.target.value)}>
        <option value="beneficio">Beneficio</option>
        <option value="desconto">Desconto</option>
        </Bd>
        <Label>Valor</Label>
        <Valor placeholder='Valor' value={`R$ ${valor}`} onChange={(event) => {onlyNumbersOnValue(event.target.value)}}/>
        <SubmitButton>Enviar</SubmitButton>
      </Form>
      <Card>
      <CardTitle>{name}</CardTitle>
      <CardContent>{name ? `${name} é um `:''} {bd}</CardContent>
      <CardButton color={colorbd}>R$ {valor}</CardButton>
    </Card>
    </Container>
  )
}

export default BeneficioDesconto
