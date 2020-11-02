import React from 'react'
import {Button} from 'reactstrap'
import { Container } from './styles'
 
export default function index(props) {
  const sentimento = [
    {id: 0, name: 'Alegria'},
    {id: 1, name: 'Agitação'},
    {id: 2, name: 'Romântico'},
    {id: 3, name: 'Amor'},
    {id: 4, name: 'Frustração'},
    {id: 5, name: 'Medo'},
    {id: 6, name: 'Tristeza'},
    {id: 7, name: 'Ciúme'},
    {id: 8, name: 'Compaixão'},
    {id: 9, name: 'Empatia'},
    {id: 10, name: 'Surpresa'},
    {id: 11, name: 'Esperança'},
  ]
  return (
    <Container>
      <h1>Selecione o <b>Sentimento</b> para podermos prosseguir</h1>
      <div className="d-flex">
        {sentimento.map( st => 
          <Button className="mx-3" key={st.id}>{st.name}</Button>
        )}
      </div>
      <div>
        <Button color="primary" onClick={() => props.setStep(4)}>Próximo Passo</Button>
      </div>
    </Container>
  )
}
