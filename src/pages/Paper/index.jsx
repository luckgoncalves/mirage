import React, { useState } from 'react';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import Composition from './Composition'

import Header from '../../components/Header'
import { Container } from './styles';

function Paper() {
  const [ step, setStep ] = useState(1)

  return (
    <>
    <Header />
    <Container>
      {step === 1 && <StepOne setStep={setStep} /> }
      {step === 2 && <StepTwo setStep={setStep} /> }
      {step === 3 && <StepThree setStep={setStep} /> }
      {step === 4 && <StepFour setStep={setStep} /> }
      {step === 5 && <Composition setStep={setStep} /> }
    </Container>
    </>
  );
}

export default Paper;