import React, { useState } from 'react';
import { Button } from 'reactstrap'
import { Container } from './styles';

function PaperOne(props) {
  const [ active, setActive ] = useState(0)


  return (
    <>
    <Container className="d-flex flex-column justify-content-center">
      <h1>Selecione o genero para podermos prosseguir</h1>
      <div className="d-flex my-5">
        <Button onClick={() => setActive(1)} className={`${active === 1 ? 'active' : ''} mx-3`}>Ja tenha a letra</Button>
        <Button onClick={() => setActive(2)} className={active === 2 ? 'active' : ''}>Compor do zero</Button>
      </div>
      <Button color="primary" onClick={() => props.setStep(2)}>Próximo Passo</Button>
    </Container>
    </>
  );
}

export default PaperOne;