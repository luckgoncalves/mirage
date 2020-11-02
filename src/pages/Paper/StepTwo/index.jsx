import React from 'react'
import { Button } from 'reactstrap'
import { Container } from './styles';

function StepTwo(props) {
  const genero = [
    {id: 0, name: 'Rock'},
    {id: 1, name: 'Sertanejo'},
    {id: 2, name: 'Gospel'},
    {id: 3, name: 'Funk'},
    {id: 4, name: 'Pop'},
    {id: 5, name: 'HipHop'},
  ]
  return (
    <Container>
      <h1>Selecione o genero para podermos prosseguir</h1>
      <div className="d-flex m-5">
        {genero.map( gen => 
          <Button key={gen.id}>{gen.name}</Button>
        )}
      </div>
      <div>
        <Button color="primary m-5" onClick={() => props.setStep(3)}>Próximo passo</Button>
      </div>
    </Container>
  );
}

export default StepTwo;