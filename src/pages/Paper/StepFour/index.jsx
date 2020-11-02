import React from 'react'
import { Button, FormGroup, Label, Input  } from 'reactstrap'
import { Container } from './styles'

export default function index(props) {
  return (
    <Container>
      <h1>Quais palavras base para que a MIRA te ajude a compor ?</h1>
      <FormGroup>
        <Label for="exampleText">Você pode escrever as palavras separadas por “,”</Label>
        <Input type="textarea" name="text" id="exampleText" />
        <Button color="primary" onClick={() => props.setStep(5)}>Gerar composição</Button>
      </FormGroup>
    </Container>
  )
}
