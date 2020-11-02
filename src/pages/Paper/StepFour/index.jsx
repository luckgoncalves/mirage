import React from 'react'
import { Button, FormGroup, Label, Input  } from 'reactstrap'
import { Container, BtNext } from './styles'

export default function index(props) {
  return (
    <Container>
      <h1 className="text-white">Quais palavras base para que a MIRA te ajude a compor ?</h1>
      <FormGroup>
        <Label className="text-white mb-3" for="exampleText">Você pode escrever as palavras separadas por “,”</Label>
        <Input style={{background: 'transparent', color: '#fff', padding: '1.5rem'}} placeholder="Amor, paixão, ternura, sempre, juntos." type="textarea" rows="10" name="text" id="exampleText" />
        <BtNext color="primary my-5" onClick={() => props.setStep(5)}>Gerar composição</BtNext>
      </FormGroup>
    </Container>
  )
}
