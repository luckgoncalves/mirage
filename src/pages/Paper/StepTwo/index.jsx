import React, { useState } from 'react'
import { Container, BtSelection, BtNext } from './styles';

function StepTwo(props) {
  const [selectGen, setSelectGen] = useState([])
  
  const handleSelect = async (e) => {
    let filt = selectGen.filter(sl => sl !== e)

    await setSelectGen([...filt, e])
  }
  
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
          <BtSelection key={gen.id} actived={selectGen.filter( sl => sl === gen.id).length > 0 ? true : false}  onClick={() => handleSelect(gen.id)}>{gen.name}</BtSelection>
        )}
      </div>
      <div>
        <BtNext color="primary m-5" onClick={() => props.setStep(3)}>Próximo passo</BtNext>
      </div>
    </Container>
  );
}

export default StepTwo;