import React, { useState } from 'react';
import { Button } from 'reactstrap'
import { Container, BtNext } from './styles';

function PaperOne(props) {
  const [ active, setActive ] = useState(0)


  return (
    <>
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-white">Selecione o genero para podermos prosseguir</h1>
      <div className="d-flex my-5 justify-content-center">
        <Button style={{background: 'transparent', color: '#fff',borderRadius: '4px', border: '1px solid #fff', width: '224px', height: '49px'}} onClick={() => setActive(1)} className={`${active === 1 ? 'active' : ''} mx-3`}>Ja tenha a letra</Button>
        <Button style={{background: 'transparent', color: '#fff',borderRadius: '4px', border: '1px solid #fff', width: '224px', height: '49px'}} onClick={() => setActive(2)} className={active === 2 ? 'active' : ''}>Compor do zero</Button>
      </div>
      <BtNext  onClick={() => props.setStep(2)}>Próximo Passo</BtNext>
    </Container>
    </>
  );
}

export default PaperOne;