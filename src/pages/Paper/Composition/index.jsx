import React from 'react';
import { Button, Card, CardTitle, CardText } from 'reactstrap'

import { Container } from './styles';

function Composition(props) {
  return (
    <Container>
      <div className="d-flex justify-content-between mb-5">
        <div>
          Nome da composição
        </div>
        <div>
          <Button style={{background: '#0CAE1C', color: '#FFF'}} onClick={() => props.setStep(4)}>Voltar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
      <Card body className='text-center'>
        <CardText>
          <p>
            Meu amor, cigano, amor
          </p>
          <p>
            Ninguém sabe o que é que eu quis
          </p>
          <p>
            Deixa o amor, não deixe por ninguém
          </p>
          <p>
            Eu só canta quando está na hora
          </p>
          <p>
            No teu c
          </p>
          <p>
            ====================
          </p>
          <p>
            Meu amor
          </p>
          <p>
            A mão que vem
          </p>
          <p>
            A mão que vem
          </p>
          <p>
            Já me fez acaba
          </p>
          <p>
            Nem vem
          </p>
<p>O amor é que eu vou</p>
<p>E que mais dobrado</p>
<p>E vou cantando</p>
<p>Vou chegar sem querer</p>

<p>Mas</p>
<p>====================</p>
<p>Meu amor, eu não consigo</p>
<p>E depois sou eu</p>
<p>Só que eu sou</p>
<p>Pra quem queira lhe dizer</p>
<p>E não quero saber comigo</p>
<p>Eu não sei</p>
<p>Nunca estou seu nome</p>

<p>====================</p>
<p>Meu amor, eu tenho que te jalopi</p>
<p>Eu tenho que te jalopi</p>

<p>Por isso que ela seja em minha vida</p>
<p>Que o tempo vai passando</p>
<p>O tempo, pode tentar</p>
<p>Que tem no mundo</p>
<p>====================</p>
<p>Meu amor, vou perguntar</p>
<p>Mas será que me dá colheu</p>

<p>Tudo é sempre</p>
<p>Tudo é sempre</p>
<p>Tudo é sempre...</p>
<p>O que foi só</p>
<p>É sempre é sempre</p>
<p>Que era o meu amor</p>

<p>====================</p>
        </CardText>
      </Card>
    </Container>
  );
}

export default Composition;