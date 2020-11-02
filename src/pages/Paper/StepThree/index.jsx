import React from 'react'
import { Container, BtSelection, BtNext } from './styles';
 
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
      <h1 className="mx-5 text-white">Selecione o <b>Sentimento</b> para podermos prosseguir</h1>
      <div className="d-flex m-5 row">
        {sentimento.map( st => 
          <BtSelection className="col-3 m-3" key={st.id}>{st.name}</BtSelection>
        )}
      </div>
      <div>
        <BtNext color="primary m-5" onClick={() => props.setStep(4)}>Próximo Passo</BtNext>
      </div>
    </Container>
  )
}
